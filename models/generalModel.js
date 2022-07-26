import { Schema, model, models } from 'mongoose';

const genSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
	type: String,
    required: true
  },
  phone: String,
  dob: Date,
  profession: String,
  type: Number,
  gender: String,
  startTime: Date,
  endTime: Date,
  eventsCompleted: [String],
  eventOngoing: String,
  isPc: Boolean

});

const General = models.General || model('General', genSchema);

export default General;