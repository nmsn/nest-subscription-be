import { Injectable } from '@nestjs/common';

import * as AV from 'leancloud-storage';

import { sendMail } from '../../script/nodemailer.js';

AV.init({
  appId: 'XuMwUdK2tccDSPBXd33edKWK-9Nh9j0Va',
  appKey: 'qSUjWONe8Pp3kDjtbh3cFD49',
  serverURLs: 'https://xumwudk2.lc-cn-e1-shared.com', // TODO 更换域名
});

interface User extends Object {
  name: string;
  email: string;
}

@Injectable()
export class UserService {

  async getAll(): Promise<any> {
    const query = new AV.Query('User');
    const result = query.find();
    return result;
  }

  async getUser(email: string): Promise<any> {
    const query = new AV.Query('User');
    query.equalTo('email', email);
    query.find().then((users) => {
      return users;
    });
  }

  async deleteUser(email: string): Promise<any> {
    const query = new AV.Query('User');
    query.equalTo('email', email);
    query.destroyAll();
  }

}
