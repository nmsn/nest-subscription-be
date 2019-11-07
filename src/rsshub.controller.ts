import { Controller, Get, Header } from '@nestjs/common';
import { RsshubService } from './rsshub.service';

@Controller('rsshub')
export class RsshubController {
  constructor(private readonly rsshubService: RsshubService) {}

  @Get()
  get(): string {
    return 'rsshub';
  }

  @Get('juejin/category/frontend')
  @Header('Content-Type', 'application/json')
  async getJueJinCategoryFrontend(): Promise<any> {
     return await this.rsshubService.getJueJinCategoryFrontend();
  }

  @Get('juejin/trending/frontend')
  @Header('Content-Type', 'application/json')
  async getJueJinTrendingFrontend(): Promise<any> {
     return await this.rsshubService.getJueJinTrendingFrontend();
  }

}
