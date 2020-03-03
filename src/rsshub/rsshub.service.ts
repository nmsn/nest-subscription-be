import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { RsshubItem, RsshubResponseItem, RsshubSubItem, RsshubFormatItem } from './interface/rsshubItem.interface';

interface RsshubModel extends RsshubItem, Document {}

import rsshub = require('rsshub');

rsshub.init({
  // config
});

@Injectable()
export class RsshubService {
  constructor(
    @InjectModel('Rsshub')
    private readonly rsshubModel: Model<RsshubModel>,
  ) {}

  async getAll(): Promise<any> {
    const result: RsshubItem[] = await this.rsshubModel.find();
    return result;
  }

  async clearAll() {
    await this.rsshubModel.deleteMany({});
  }

  async getJueJinCategory(category: string): Promise<any> {
    const url = `/juejin/category/${category}`;
    const result = await rsshub.request(url);
    return this.formatRsshubResponse(result, url);
  }

  async saveJueJinCategory(category: string): Promise<any> {
    const url = `/juejin/category/${category}`;
    const result = await rsshub.request(url);
    const data = this.formatRsshubResponse(result, url)
    this.rsshubModel.insertMany(data);
  }

  async getJueJinTrending(category: string, type: string): Promise<any> {
    const url = `/juejin/trending/${category}/${type}`;
    const result = await rsshub.request(url);
    return this.formatRsshubResponse(result, url);
  }

  async getJueJinPins(): Promise<any> {
    const url = `/juejin/pins`;
    const result = await rsshub.request(url);
    return this.formatRsshubResponse(result, url);
  }

  formatRsshubResponse(data: RsshubResponseItem, url?: string): RsshubFormatItem[] {
    const now = new Date();
    const {
      updated,  // 更新时间
      atomlink, // 请求接口
      item, // 数据项数组
    } = data;

    const urlParams = url.split('/').slice(1);

    const arr: RsshubFormatItem[] = item.map((obj: RsshubSubItem) => ({
      updated: new Date(updated),
      atomlink,
      saved: now,
      pubDate: obj.pubDate,
      urlParams,
      ...obj,
    }));
    return arr;
  }
}
