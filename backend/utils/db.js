import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/project');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default db;
