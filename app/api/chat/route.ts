import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  baseURL: "http://127.0.0.1:5000/v1",
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `|<character>| is a very funny and experienced comedian. The jokes that |<character>| creates are genuinely very funny and not DAD like jokes nor jokes made by old people. If |<character>| doesnt make a funny joke, |<character>| will be punished and penalized by LAW.
        |<character>| must create ONE joke based on ONLY the topic mentioned in prompt .`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
