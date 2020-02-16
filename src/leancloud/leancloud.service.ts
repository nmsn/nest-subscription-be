import { Injectable, Inject } from '@nestjs/common';
import * as AV from 'leancloud-storage';

AV.init({
  appId: 'XuMwUdK2tccDSPBXd33edKWK-9Nh9j0Va',
  appKey: 'qSUjWONe8Pp3kDjtbh3cFD49',
  serverURLs: 'https://xumwudk2.lc-cn-e1-shared.com', // TODO 更换域名
});

interface Item extends Object {
  title: string;
  link: string;
  pubDate: string;
  type: string;
}

@Injectable()
export class LeanCloudService {
  // Create
  async saveItem(container: string, item: Item): Promise<any> {

    const RsshubItem = AV.Object.extend(container);
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
  }

  async saveItemArr(container: string, arr: Item[]): Promise<any> {
    arr.forEach((item: Item) => {
      this.saveItem(container, item);
    });
  }

  // Retrieve
  async getAll(container: string): Promise<any> {
    const query = new AV.Query(container);
    const result = query.find();
    return result;
  }

  // Update
  async updateItem(container: string, key: string, value: string): Promise<any> {
    const query = new AV.Query(container);
    query.equalTo(key, value);

    query.find().then((result) => {
      result.forEach(item => item.set(key, value));
    });
  }

  async getItem(container: string, key: string, value: string): Promise<any> {
    const query = new AV.Query(container);
    query.equalTo(key, value);
    query.find().then((result) => {
      return result;
    });
  }

  // Delete
  async deleteItem(container: string, key: string, value: string): Promise<any> {
    const query = new AV.Query(container);
    query.equalTo(key, value);
    query.destroyAll();
  }
}
