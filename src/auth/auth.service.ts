import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // TODO 查找是否存在该用户
    const userArr = await this.userService.find({ username, password: pass });
    const user = userArr && userArr[0];

    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async createToken(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
