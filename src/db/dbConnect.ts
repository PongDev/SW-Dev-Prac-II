import mongoose from "mongoose";

let isConnected = false;
export const dbConnect = async () => {
  if (isConnected) return;

  mongoose.set("strictQuery", true);
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) throw new Error("Please define MONGO_URI");

  try {
    await mongoose.connect(MONGO_URI, { bufferCommands: false });
    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
