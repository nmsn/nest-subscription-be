import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsshubModule } from '../rsshub/rsshub.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from '../common/tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_ADDRESS, {
      useNewUrlParser: true,
      useFindAndModify: false,
    }),
    ScheduleModule.forRoot(),
    TasksModule,
    UserModule,
    RsshubModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
