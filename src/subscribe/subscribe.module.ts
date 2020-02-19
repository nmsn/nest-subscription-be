import { Module } from '@nestjs/common';

import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSubscriptionSchema } from './schemas/userSubscription.schema';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [SubscribeController],
  providers: [SubscribeService],
  imports: [
    MongooseModule.forFeature([{ name: 'UserSubscription', schema: UserSubscriptionSchema }]),
    UserModule,
  ],
})
export class SubscribeModule {}
