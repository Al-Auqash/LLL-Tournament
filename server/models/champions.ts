import mongoose from 'mongoose';

const championSchema = new mongoose.Schema(
  {
    id_user: {
      type: Number,
      default: 0,
    },
    username: String,
    inGameName: String,
    series: String,
    gameName: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    collection: 'champions',
  },
);

export default mongoose.model('champions', championSchema);
