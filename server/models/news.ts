import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    collection: 'news',
  },
);
export default mongoose.model('newsModel', newsSchema);
