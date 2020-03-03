import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Query,
  Request,
  Response,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  /**
   * 更新用户信息
   * @param createCatDto 用户对象
   */
  @Post('update')
  @HttpCode(200)
  async update(@Body() createCatDto: CreateUserDto) {
    return await this.userService.update(createCatDto);
  }

  /**
   * 根据相应的条件查询用户列表
   * @param createCatDto 用户对象
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  @HttpCode(200)
  async find(@Query() createCatDto: CreateUserDto) {
    return await this.userService.find(createCatDto);
  }

  /**
   * 用户登录
   * @param createUserDto 用户对象
   */

  @Post('login')
  @HttpCode(200)
  async login(@Body() createUserDto: CreateUserDto, @Response() res) {
    const user = await this.userService.login(createUserDto);
    if (user) {
      res.set('authorization', user.token);
      return res.send({ data: user, message: '登录成功' });
    }

    throw new UnauthorizedException('用户名或密码错误');
  }

  /**
   * 用户注册
   * @param createUserDto 用户对象
   */
  @Post('register')
  @HttpCode(200)
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  /**
   * 通过请求头中属性获取用户信息
   * @param headers 请求头
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('current')
  @HttpCode(200)
  async getUser(@Request() req) {
    const token = req.header('authorization');
    const userInfo = await this.userService.getUser(token);
    return { data: userInfo, message: '获取用户数据成功' };
  }
}
