import { Controller, Get, Header, Param } from '@nestjs/common';
import { RsshubService } from './rsshub.service';

@Controller('rsshub')
export class RsshubController {
  constructor(private readonly rsshubService: RsshubService) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.rsshubService.getAll();
  }

  @Get('seachByTitle/:title')
  async searchByTitle(@Param('title') title: string): Promise<any> {
    return await this.rsshubService.searchByTitle(title);
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
