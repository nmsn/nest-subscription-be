import { Controller, Get, Post, Body, Param, Query, Header } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('find')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get()
  addPhoto() {
    this.photoService.addPhoto();
  }

  @Post('search')
  search(@Body() body)  {
    return 'response';
  }

  @Get('search2/:id')
  search2(@Param() body: object, @Query() body2: object)  {
    return 'response';
  }
}
