import { Controller, Request, Response, Post, UseGuards, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Request() req, @Response() res) {
    const token = await this.authService.createToken(req.user);

    if (token) {
      res.header('token', token.token).send({ code: 0, message: '登录成功' });
    }

    return { code: -1, data: {}, message: '用户名或密码错误' };
  }

}
