import mongoose from "mongoose";

import { IUser } from "../interfaces/IUser";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: 1 },
    password: { type: String, required: false },
  },
  { timestamps: true }
);

userSchema.index({ email: "text" });

const User = mongoose.model<IUser>("users", userSchema);

export default User;
