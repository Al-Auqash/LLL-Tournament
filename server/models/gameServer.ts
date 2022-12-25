import mongoose from 'mongoose';

const gameServerSchema = new mongoose.Schema(
  {
    gameServer: String,
    gameServerAlias: String,
  },
  {
    collection: 'gameServer',
  },
);

export default mongoose.model('gameServer', gameServerSchema);
