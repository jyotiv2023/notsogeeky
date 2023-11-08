import mongoose from "mongoose";

export const Connection = async () => {
  const URL = "";
  try {
    await mongoose.connect(URL, { useNewUrlParser });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting with the database");
  }
};
