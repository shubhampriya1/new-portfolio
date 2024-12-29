import express from "express";
import cors from "cors";

import "dotenv/config";

import { chat } from "./utils/gen-ai.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/chat", chat);

app.use("*", (req, res) => {
  res.status(404).json({ message: "No resource found" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
