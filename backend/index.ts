import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { runAIWorkFlow } from "./workflow/langflow_workflow";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.send("It is working");
});

app.post("/chat", async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    res.status(404).json({ message: "Prompt is not given" });
    return;
  }

  try {
    console.log(prompt);
    const response = await runAIWorkFlow(prompt);

    res
      .status(200)
      .json({
        response: JSON.parse(response),
        message: "Response is fetched successfully",
      });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("The server is running at PORT " + process.env.PORT);
});
