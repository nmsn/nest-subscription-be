import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { UserSubscription } from './interface/userSubscription.interface';

interface UserSubscriptionModel extends UserSubscription, Document {}

@Injectable()
export class SubscribeService {
  constructor(
    @InjectModel('UserSubscription')
    private readonly userSubscriptionModel: Model<UserSubscriptionModel>,
  )
  {}

  async update(userId: string, params: object) {
    const userSubscription: UserSubscription = await this.userSubscriptionModel.findOneAndUpdate(
      { userId },
      { $set: { 'subscription.juejin': params } },
      { new: true },
    );
    return userSubscription;
  }

  async get(userId: string): Promise<object> {
    const userSubscription: UserSubscription = await this.userSubscriptionModel.findOne(
      { userId },
    );

    const { subscription } = userSubscription;
    return subscription;
  }
}
