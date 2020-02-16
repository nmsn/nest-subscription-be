import { Controller, Get, Post, Body, HttpCode, Headers } from '@nestjs/common';
import { AppService } from './app.service';

import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
