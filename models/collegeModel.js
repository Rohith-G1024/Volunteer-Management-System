import { Schema, model, models } from 'mongoose';

const collegeSchema = new Schema({
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
  address: String,
  phone: String,
  type: Number,
  mouApproved: Boolean
});

const College = models.College || model('College', collegeSchema);

export default College;