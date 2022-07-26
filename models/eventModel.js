import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  pcEmail: String,
  title: String,
  desc: String,
  imgLink: String,
  type: String,
  status: String
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
