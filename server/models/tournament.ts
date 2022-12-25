import mongoose from 'mongoose';

const gameTournamentSchema = new mongoose.Schema(
  {
    name: String,
    status: String,
    prize: String,
    game: String,
    region: String,
  },
  {
    collection: 'tournaments',
  },
);

export default mongoose.model('tournamentModel', gameTournamentSchema);
