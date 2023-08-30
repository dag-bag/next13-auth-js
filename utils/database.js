import mongoose from "mongoose";

const connectDb = async () => {
  console.log("Connecting to MongoDB...");
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDb.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error Connecting to MongoDb: ${error}`);
    process.exit(1);
  }
};

export default connectDb;