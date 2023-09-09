import mongoose from "mongoose";

const connectDb = async () => {
  console.log("Trying Connecting to MongoDB...");
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDb.");
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    console.log(`Error Connecting to MongoDb: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
