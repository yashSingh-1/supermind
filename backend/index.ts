import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { runAIWorkFlow } from "./workflow/langflow_workflow";
import dbConnect, {
  history_Collection,
  userData_Collection,
} from "./db/connect";

import Groq from "groq-sdk";
dotenv.config();

const groq_client = new Groq({
  apiKey: process.env["GROQ_API_KEY"],
});

dbConnect();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get-history", async (req: Request, res: Response) => {
  const companyId = req.query.companyid;

  if (!companyId) {
    res.status(404).json({ message: "CompanyId is not provided" });
  }

  try {
    const response = history_Collection.find({ companyId });
    const data = await response.toArray();

    res.status(200).json({
      response: data,
      message: "Company history is fetched successfully",
    });
  } catch (e) {
    res.status(500).json({ message: "Error in fetching company history" });
  }
});

app.post("/generate", async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  console.log(process.env.GROQ_API_KEY);

  if (!prompt) {
    res.status(404).json({ message: "Prompt is not given" });
    return;
  }

  try {
    const chatCompletion = await groq_client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are an advertising expert. Generate a heading, subheading, a small description, and a list of keywords to boost the ad for a product and also follow the following prompt: ${prompt}. Provide the response in JSON format only. Don't include any text except JSON`,
        },
      ],
      model: "llama3-70b-8192",
    });

    const response = chatCompletion.choices[0].message.content;

    res
      .status(200)
      .json({
        message: "Generated successfully",
        response: JSON.parse(response),
      });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error in generation in the server" });
  }
});

app.post("/save-history", async (req: Request, res: Response) => {
  const history: {
    companyId: string;
    prompt: string;
  }[] = req.body.history;

  try {
    const response = await history_Collection.insertMany(history);
    console.log(response);
    res.status(200).json({ message: "History is saved successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error in saving history" });
  }
});

app.post("/save-user-data", async (req: Request, res: Response) => {
  const user_data: {
    user_id: string;
    company_id: string;
    age: number;
    gender: string;
    location: string;
    education_level: string;
    income_range: string;
  }[] = req.body.userData;

  try {
    const response = await userData_Collection.insertMany(user_data);
    console.log(response);
    res.status(200).json({ message: "User data is inserted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Server problem in saving user forum data" });
  }
});

app.post("/chat", async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  const companyId = req.body.companyId;

  if (!prompt) {
    res.status(404).json({ message: "Prompt is not given" });
    return;
  }

  try {
    console.log(prompt);
    const response = await runAIWorkFlow(
      `${prompt} with company id ${companyId}`
    );

    res.status(200).json({
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
