import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const localai = new OpenAI({
  baseURL: `http://127.0.0.1:5000/v1`,
});

export const runtime = "edge";

export async function POST(req: Request) {
  // Parse the entire request body to get messages and model
  const { messages, model } = await req.json();

  const APIClient = model === "local" ? localai : openai;

  const response = await APIClient.chat.completions.create({
    model: model || "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are a professional storyteller who writes captivating and imaginative short stories with compelling characters and unexpected plot twists.`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
