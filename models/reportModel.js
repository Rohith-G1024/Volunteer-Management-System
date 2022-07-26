import { Schema, model, models } from 'mongoose';

const reportSchema = new Schema({
	s_email: String,
	eventId: String,
	pcEdited: Boolean,
    imgLinks: [String],
	desc: String
});

const Report = models.Report || model('Report', reportSchema);

export default Report;