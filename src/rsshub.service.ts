import { Injectable, Inject } from '@nestjs/common';
import rsshub  = require('rsshub');
import * as AV from 'leancloud-storage';

AV.init({
  appId: 'XuMwUdK2tccDSPBXd33edKWK-9Nh9j0Va',
  appKey: 'qSUjWONe8Pp3kDjtbh3cFD49',
  serverURLs: 'https://xumwudk2.lc-cn-e1-shared.com', // TODO 更换域名
});

rsshub.init({
  // config
});

@Injectable()
export class RsshubService {

  getHello(): string {
    return 'Hello World!';
  }

  async getAll(): Promise<any> {
    const query = new AV.Query('Rsshub');
    const result = query.find();

    return result;
  }

  async clearAll() {
    const query = new AV.Query('Rsshub');
    await query.destroyAll();
  }

  async searchByTitle(title: string): Promise<any> {
    const query = new AV.Query('Rsshub');
    return await query.contains('title', title).find();
  }

  async getJueJinCategoryFrontend(): Promise<any> {
    const result = await rsshub.request('/juejin/category/frontend');

    interface Item extends Object {
      title: string;
      link: string;
      pubDate: string;
    }

    const arr: Item[] = result.item;

    arr.forEach((item: Item) => {
      const RsshubItem = AV.Object.extend('Rsshub');
      const rsshubItem = new RsshubItem();

      rsshubItem.set({
        title: item.title,
        link: item.link,
        pubData: item.pubDate,
      });

      rsshubItem.save().then(() => {
        // tslint:disable-next-line: no-console
        console.log('保存成功。');
      });
    });
  }

  async getJueJinTrendingFrontend(): Promise<any> {
    const result = await rsshub.request('/juejin/trending/ios/weekly');
    return { data: result };
  }
}
