import { Controller, Get, Post, Header, Param, Body, HttpCode, UseGuards, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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

}
