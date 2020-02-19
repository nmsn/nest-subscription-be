import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(payload: object) {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    const tokenItem = this.jwtService.verify(token);
    return tokenItem;
  }

  // async updateToken(token: string) {
  //   const { username, password } = await this.verifyToken(token);
  //   const newToken = this.createToken({ username, password });
  //   return newToken;
  // }

  // async isTokenExpired(token: string) {
  //   const { exp } = await this.verifyToken(token);
  //   const now = new Date()
  //     .getTime()
  //     .toString()
  //     .slice(0, 10);
  //   if (exp < now) {
  //     return true;
  //   }
  //   return false;
  // }
}
