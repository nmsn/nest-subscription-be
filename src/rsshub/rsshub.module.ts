import { Module } from '@nestjs/common';

import { RsshubController } from './rsshub.controller';
import { RsshubService } from './rsshub.service';

@Module({
  controllers: [RsshubController],
  providers: [RsshubService],
})
export class RsshubModule {}
