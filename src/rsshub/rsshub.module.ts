import { Module } from '@nestjs/common';

import { RsshubController } from './rsshub.controller';
import { RsshubService } from './rsshub.service';

import { MongooseModule } from '@nestjs/mongoose';
import { RsshubItemSchema } from './schemas/rsshubItem.schema';

@Module({
  controllers: [RsshubController],
  providers: [RsshubService],
  imports: [
    MongooseModule.forFeature([{ name: 'Rsshub', schema: RsshubItemSchema }]),
  ],
  exports: [RsshubService],
})
export class RsshubModule {}
