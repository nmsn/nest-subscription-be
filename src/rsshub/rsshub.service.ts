import { Injectable } from '@nestjs/common';
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

interface Item extends Object {
  title: string;
  link: string;
  pubDate: string;
  type: string;
}

@Injectable()
export class RsshubService {
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

  async getJueJinCategory(category: string): Promise<any> {
    const result = await rsshub.request(`/juejin/category/${category}`);

    const arr: Item[] = result.item;

    arr.forEach((item: Item) => {
      const RsshubItem = AV.Object.extend('Rsshub');
      const rsshubItem = new RsshubItem();

      rsshubItem.set({
        title: item.title,
        link: item.link,
        pubData: item.pubDate,
        type: category,
      });

      rsshubItem.save().then(() => {
        // tslint:disable-next-line: no-console
        console.log('保存成功。');
      });
    });
  }

  /**
   * @param {string} category  android | frontend | ios | backend | design | product | freebie | article | ai | devops | all
   * @param {string} type weekly | monthly | historical
   * @return {Object}
   */
  async getJueJinTrending(category: string, type: string): Promise<any> {
    const result = await rsshub.request(`/juejin/trending/${category}/${type}`);
    return { data: result };
  }

  async getJueJinPins(): Promise<any> {
    const result = await rsshub.request(`/juejin/pins`);
    return { data: result };
  }
}
