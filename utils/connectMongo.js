import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://vms:5767@cluster0.zbnix.mongodb.net/vmsdb?retryWrites=true&w=majority"
  );

export default connectMongo;
