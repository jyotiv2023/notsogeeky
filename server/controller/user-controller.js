import User from "../model/user.js";
import bcrypt from "bcrypt";
export const signUpUser = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    // Additional validation (adjust as needed)
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //10 is salt here

    const user = {
      username: username,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ message: "signup successfull" });
  } catch (error) {
    return res.status(500).json({ message: "error while signup" });
  }
};
