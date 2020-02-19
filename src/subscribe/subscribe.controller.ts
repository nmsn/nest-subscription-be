import { Controller, Get, Post, Body, HttpCode, Headers, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SubscribeService } from './subscribe.service';

@Controller('subscribe')
@UseGuards(AuthGuard('jwt'))
export class SubscribeController {
  constructor(
    private readonly subscribeService: SubscribeService,
  ) {}

  @Get()
  async get(@Req() req): Promise<object> {
    const data = await this.subscribeService.get(req.user.userId);
    return { data, message: '获取订阅数据成功' };
  }

  @Post('update')
  async update(@Req() req, @Body() body): Promise<object> {
    return await this.subscribeService.update(req.user.userId, body);
  }
}
