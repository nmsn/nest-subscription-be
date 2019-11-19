import { Module } from '@nestjs/common';
import { RsshubModule } from '../rsshub/rsshub.module';

@Module({
  imports: [RsshubModule],
})
export class AppModule {}
