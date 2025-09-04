import mongoose from "mongoose";

const datasetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  filename: String,
  data: Object
}, { timestamps: true });

export default mongoose.model("Dataset", datasetSchema);
