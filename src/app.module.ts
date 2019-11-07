import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { RsshubModule } from './rsshub.module';
import { PhotoModule } from './photo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
  // controllers: [RsshubController, PhotoController],
  // providers: [RsshubService, PhotoService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
