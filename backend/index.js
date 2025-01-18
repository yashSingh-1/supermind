import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  res.send("It is working");
});

app.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    res.status(404).json({ message: "Prompt is not given" });
    return;
  }

  try {
    const response = "dummy response";

    res
      .status(200)
      .json({ response, message: "Response is fetched successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("The server is running at PORT " + process.env.PORT);
});
