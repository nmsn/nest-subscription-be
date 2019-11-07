import { Injectable, Inject } from '@nestjs/common';
import rsshub  = require('rsshub');

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rsshub } from './rsshub.entity';

rsshub.init({
  // config
});

@Injectable()
export class RsshubService {
  constructor(
    @InjectRepository(Rsshub)
    private readonly rsshubRepository: Repository<Rsshub>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getJueJinCategoryFrontend(): Promise<any> {
    const result = await rsshub.request('/juejin/category/frontend');

    const arr = result.item;

    arr.forEach(item => {
      const rsshubItem = new Rsshub();

      rsshubItem.title = item.title;
      rsshubItem.link = item.link;
      rsshubItem.description = item.description;
      rsshubItem.pubDate = item.pubDate;

      this.rsshubRepository.create(rsshubItem);
    });

    return { data: result };
  }

  async getJueJinTrendingFrontend(): Promise<any> {
    const result = await rsshub.request('/juejin/trending/ios/weekly');
    return { data: result };
  }
}
