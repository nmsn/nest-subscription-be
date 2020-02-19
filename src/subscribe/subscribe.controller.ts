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
  get(@Req() req): object {
    return this.subscribeService.get(req.user.userId);
  }

  @Post('update')
  update(@Req() req, @Body() body): object {
    return this.subscribeService.update(req.user.userId, body);
  }
}
