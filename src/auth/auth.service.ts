import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(user: any) {
    const payload = { username: user.username, password: user.password };
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    const tokenItem = this.jwtService.verify(token);
    return tokenItem;
  }
}
