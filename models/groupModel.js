import { Schema, model, models } from 'mongoose';

const groupSchema = new Schema({
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
  repName: String,
  groupSize: Number,
  type: Number

});

const Group = models.Group || model('Group', groupSchema);

export default Group;