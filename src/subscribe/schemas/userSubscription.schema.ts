/*
 * filename: UserSchema
 * overview: mongoose 生成的用户信息数据库格式
 */

import * as mongoose from 'mongoose';

export const UserSubscriptionSchema = new mongoose.Schema({
  userId: String,
  subscription: Object,
});
