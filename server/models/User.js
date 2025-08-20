import mongoose, { connection } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true },
    full_name: { type: String, unique: true },
    username: { type: String, required: true },
    bio: { type: String, default: "Hey there! I am using Galaxy" },

    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    followers: { type: String, ref: "User" },
    following: { type: String, ref: "User" },
    connections: { type: String, ref: "User" },
  },
  { timestamps: true, minimize: false }
);
const User = mongoose.model("User", userSchema);

export default User;
