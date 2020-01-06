import { Module } from '@nestjs/common';

import { LeanCloudService } from './leancloud.service';

@Module({
  providers: [LeanCloudService],
})
export class RsshubModule {}
