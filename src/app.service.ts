import { Injectable } from '@nestjs/common';
import axios, { AxiosPromise } from 'axios';
import rsshub  = require('rsshub');

rsshub.init({
  // config
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJueJinCategoryFrontend(): Promise<any> {
    const result = await rsshub.request('/juejin/category/frontend');
    return { data: result };
  }

  async getJueJinTrendingFrontend(): Promise<any> {
    const result = await axios.get('https://rsshub.app/juejin/trending/ios/weekly');
    return { data: result };
  }
}
