import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Clerk ID or custom string
    email: { type: String, required: true },
    full_name: { type: String },
    username: { type: String, required: true, unique: true },
    bio: { type: String, default: "Hey there! I am using Galaxy" },
    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    location: { type: String, default: "" },

    // ✅ Relationship fields
    followers: [{ type: String, ref: "User" }],   // array of user IDs
    following: [{ type: String, ref: "User" }],   // array of user IDs
    connections: [{ type: String, ref: "User" }], // mutual connections
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.model("User", userSchema);

export default User;