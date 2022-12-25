import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema(
  {
    // id_user: {
    //   type: Number,
    //   default: 0,
    // },
    name: String,
    team: String,
    username: String,
    email: String,
    password: String,
  },
  {
    collection: 'players',
  },
);

export default mongoose.model('player', playerSchema);
