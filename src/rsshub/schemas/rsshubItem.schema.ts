import * as mongoose from 'mongoose';

export const RsshubItemSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  link: String,
  guid: String,
  atomlink: String,
  updated: Date,
  pubDate: Date,
  saved: Date,
});
