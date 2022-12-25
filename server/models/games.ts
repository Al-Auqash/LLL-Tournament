import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    gameName: String,
    genre: String,
    developer: String,
    publisher: String,
  },
  {
    collection: 'games',
  },
);

export default mongoose.model('games', gameSchema);
