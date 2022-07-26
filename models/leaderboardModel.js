import { Schema, model, models } from 'mongoose';

const ldrbrdSchema = new Schema({
	s_email: String,
	eventId: String,
	pcEdited: Boolean,
    imgLinks: [String],
	desc: String
});

const Leaderboard = models.Leaderboard || model('Leaderboard', ldrbrdSchema);

export default Leaderboard;