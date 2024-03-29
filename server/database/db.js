import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@blog.wuxwh4t.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting with the database", err);
  }
};
export default Connection;
