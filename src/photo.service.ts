import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async addPhoto(): Promise<Photo> {
    const photo = new Photo();

    photo.name = '123';
    photo.description = '123';
    photo.filename = '123';
    photo.views = 123;
    photo.isPublished  = true;

    return await this.photoRepository.create(photo);

    // const savedPhotos = await this.photoRepository.find();

    // console.log('All photos from the db: ', savedPhotos);
  }
}
