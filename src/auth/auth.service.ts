import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
