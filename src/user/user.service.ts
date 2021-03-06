import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { Response } from '../Response.interface';
import { Model, Document } from 'mongoose';
import { AuthService } from '../auth/auth.service';

interface UserModel extends User, Document {}

export interface ResponseUser {
  user: CreateUserDto;
  token: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
    private readonly authService: AuthService,
  ) {}

  /**
   * 创建新用户
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<Response<User | object>> {
    const createdCat = new this.userModel(createUserDto);
    const existsUser = await this.userModel.findOne(
      { username: createUserDto.username },
      { password: 0 },
    );
    if (existsUser) {
      return { code: 1, data: {}, message: '用户名已存在' };
    }
    return { code: 0, data: createdCat, message: '' };
  }

  /**
   * 登录
   * @param createUserDto
   */
  async login(createUserDto: CreateUserDto): Promise<ResponseUser> {
    const existsUser = await this.userModel.findOne({
      username: createUserDto.username,
    });

    // 根据用户名和密码创建token
    if (existsUser && existsUser.password === createUserDto.password) {
      const token = await this.authService.createToken({
        username: existsUser.username,
        userId: existsUser._id,
      });
      return { user: existsUser, token };
    }
    return null;
  }

  /**
   * 更新用户
   * @param createUserDto
   */
  async update(createUserDto: CreateUserDto): Promise<Response<User | object>> {
    const user = await this.userModel.findOneAndUpdate(
      { username: createUserDto.username },
      createUserDto,
      { new: true },
    );
    if (user) {
      return { code: 0, data: user, message: '用户信息更新成功' };
    }
    return { code: 1, data: {}, message: '用户信息更新失败' };
  }

  /**
   * 获取当前用户信息
   * @param headers 用户 token 值，这里用 id 进行模拟
   */
  async getUser(token: string): Promise<ResponseUser> {
    const tokenInfo = await this.authService.verifyToken(token);

    const { userId } = tokenInfo;
    const existsUser = await this.userModel.findById(userId);

    if (existsUser) {
      return { user: existsUser, token };
    }

    return null;
  }

  /**
   * 查询用户列表
   * @param createUserDto
   */
  async find(createUserDto: CreateUserDto): Promise<User[]> {
    const { page, pageSize, ...rest } = createUserDto;
    const totalCount = await this.userModel.find({ ...rest }).countDocuments();
    const userList = await this.userModel
      .find({ ...rest })
      .limit(+pageSize)
      .skip((page - 1) * pageSize)
      .exec();
    if (userList && userList.length > 0) {
      // return { code: 0, data: userList, message: '用户列表查询成功', page, pageSize, totalCount };
      return userList;
    }
    // return { code: 0, data: userList, message: '用户列表无数据', page: +page === 0 ? page : Math.ceil(totalCount / page), pageSize, totalCount };
    return null;
  }

  // /**
  //  * 供别的模块调用查询用户列表的方法
  //  * @param params 查询条件
  //  * @param filter 过滤条件
  //  */
  // async modelFind(params: any, filter: any = { password: 0, _v: 0 }): Promise<Response<User[]>> {
  //     return this.userModel.find(params, filter);
  // }

  /**
   * 根据 id 查询对应用户信息
   * @param id 用户 id
   */
  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // TODO 查找是否存在该用户
    const user = await this.userModel.findOne({ username, password: pass });
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}
