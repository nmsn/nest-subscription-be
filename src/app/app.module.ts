import { Module } from '@nestjs/common';
import { RsshubModule } from '../rsshub/rsshub.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from '../user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpExceptionFilter } from '../common/filter/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    RsshubModule,
    UserModule,
    MongooseModule.forRoot('mongodb://42.78.72.186/nmsn', { useNewUrlParser: true, useFindAndModify: false }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
