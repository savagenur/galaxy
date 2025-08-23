import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true },
    full_name: { type: String, },
    username: { type: String, required: true, unique: true }, // consider unique for usernames
    bio: { type: String, default: "Hey there! I am using Galaxy" },
    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    location: { type: String, default: "" }, // ✅ add this
  },
  { timestamps: true, minimize: false }
);
const User = mongoose.model("User", userSchema);

export default User;
