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

  @Get('juejin/category/:category')
  @Header('Content-Type', 'application/json')
  async getJueJinCategoryFrontend(
    @Param('category') category: string,
  ): Promise<any> {
    return await this.rsshubService.getJueJinCategory(category);
  }

  @Get('juejin/trending/:category/:type')
  @Header('Content-Type', 'application/json')
  async getJueJinTrendingFrontend(
    @Param('category') category: string,
    @Param('type') type: string,
  ): Promise<any> {
    return await this.rsshubService.getJueJinTrending(category, type);
  }
}
