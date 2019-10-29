import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('rsshub')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('juejin/category/frontend')
  @Header('Content-Type', 'application/json')
  async getJueJinCategoryFrontend(): Promise<any> {
     return await this.appService.getJueJinCategoryFrontend();
  }

  @Get('juejin/trending/frontend')
  @Header('Content-Type', 'application/json')
  async getJueJinTrendingFrontend(): Promise<any> {
     return await this.appService.getJueJinTrendingFrontend();
  }

}
