import { Controller, Get, Post, Header, Param, Body, HttpCode, UseGuards, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { RolesGuard } from '../common/guard/roles.guard';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  async getAll(): Promise<any> {
    return await this.userService.getAll();
  }

  @Get('getUser')
  @Header('Content-Type', 'application/json')
  async getUSer(@Param('email') email: string): Promise<any> {
    return await this.userService.getUser(email);
  }

  @Post('deleteUser')
  @Header('Content-Type', 'application/json')
  async deleteUser(@Param('email') email: string): Promise<any> {
    return await this.userService.deleteUser(email);
  }

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
  @Get('list')
  @HttpCode(200)
  async find(@Query() createCatDto: CreateUserDto) {
      return await this.userService.find(createCatDto);
  }

}
