import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { PhotoModule } from './photo.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
