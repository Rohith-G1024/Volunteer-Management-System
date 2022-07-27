import { Schema, model, models } from 'mongoose';

const ldrbrdSchema = new Schema({
	s_email: String,
	points: Number,
});

const Leaderboard = models.Leaderboard || model('Leaderboard', ldrbrdSchema);

export default Leaderboard;