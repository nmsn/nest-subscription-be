import { Controller, Get, Post, Header, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
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

}
