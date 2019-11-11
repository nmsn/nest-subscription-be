import { Module } from '@nestjs/common';
import { RsshubModule } from './rsshub.module';

@Module({
  imports: [RsshubModule],
})
export class AppModule {}
