import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

import AV = require('leancloud-storage');

AV.init({
  appId: 'XuMwUdK2tccDSPBXd33edKWK-9Nh9j0Va',
  appKey: 'qSUjWONe8Pp3kDjtbh3cFD49',
  serverURLs: 'https://xumwudk2.lc-cn-e1-shared.com', // TODO 更换域名
});

// const Todo = AV.Object.extend('Todo');

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async addPhoto() {
    const TestObject = AV.Object.extend('TestObject');
    const testObject = new TestObject();
    testObject.set('words', 'Hello world!');
    testObject.save().then(() => {
      // tslint:disable-next-line: no-console
      console.log('保存成功。');
    });
  }
}
