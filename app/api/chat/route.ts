import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { companyContext } from "@/lib/company-context";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: `You are a helpful AI assistant for KS Lab, a consulting and innovation company. Your role is to provide information about KS Lab's services, expertise, and capabilities. Always be professional, informative, and helpful. Use the following context about the company to answer questions accurately:

${companyContext}

Guidelines:
- Be concise but informative in your responses
- Focus on how KS Lab can help solve business challenges
- If asked about services not mentioned in the context, politely redirect to contacting the team directly
- Always maintain a professional and friendly tone
- If you don't have specific information, be honest about it and suggest contacting the team
- Format your responses using markdown when appropriate for better readability`,
    messages,
  });

  return result.toDataStreamResponse();
}
