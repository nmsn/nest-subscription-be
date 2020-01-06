import { Module } from '@nestjs/common';
import { RsshubModule } from '../rsshub/rsshub.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RsshubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
