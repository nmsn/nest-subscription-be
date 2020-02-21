import { Controller, Get, Post, Param } from '@nestjs/common';
import { RsshubService } from './rsshub.service';

@Controller('rsshub')
export class RsshubController {
  constructor(private readonly rsshubService: RsshubService) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.rsshubService.getAll();
  }

  @Get('clearall')
  async clearAll() {
    await this.rsshubService.clearAll();
  }

  @Get('juejin/category/:category')
  async getJueJinCategory(
    @Param('category') category: string,
  ): Promise<any> {
    return await this.rsshubService.getJueJinCategory(category);
  }

  @Get('juejin/trending/:category/:type')
  async getJueJinTrending(
    @Param('category') category: string,
    @Param('type') type: string,
  ): Promise<any> {
    return await this.rsshubService.getJueJinTrending(category, type);
  }

  @Get('juejin/trending/pins')
  async getJueJinPins(): Promise<any> {
    return await this.rsshubService.getJueJinPins();
  }
}
