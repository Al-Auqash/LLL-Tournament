import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: 'Player',
    },
  },
  {
    collection: 'users',
  },
);

export default mongoose.model('authentication', authSchema);
