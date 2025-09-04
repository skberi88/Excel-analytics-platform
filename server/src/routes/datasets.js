import express from "express";
import multer from "multer";
import XLSX from "xlsx";
import Dataset from "../models/Dataset.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", auth, upload.single("file"), async (req, res) => {
  try {
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    const dataset = new Dataset({
      user: req.user.id,
      filename: req.file.originalname,
      data: json
    });

    await dataset.save();
    res.json(dataset);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const datasets = await Dataset.find({ user: req.user.id });
  res.json(datasets);
});

export default router;
