import { Module } from '@nestjs/common';

import { RsshubController } from './rsshub.controller';
import { RsshubService } from './rsshub.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';

import { Rsshub } from './rsshub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rsshub])],
  exports: [TypeOrmModule],

  controllers: [RsshubController],
  providers: [RsshubService],
})
export class RsshubModule {}
