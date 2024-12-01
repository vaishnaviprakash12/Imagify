import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String, // Fixed: Correct case for String
    required: true,
  },
  email: {
    type: String, // Fixed: Correct case for String
    required: true,
    unique: true,
  },
  password: {
    type: String, // Fixed: Correct case for String
    required: true,
  },
});

// Prevent duplicate model compilation in development
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
