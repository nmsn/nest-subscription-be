import { Controller, Get, Post, Header } from '@nestjs/common';
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
    return this.photoService.addPhoto();
  }
}
