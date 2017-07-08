import * as mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  text: String
});

export const List = mongoose.model('List', listSchema);
