import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const client = await Client.connect("teamsq/sq-assistant");
    const result = await client.predict("/chat", { message });

    const reply = (result.data as string[])[0] ?? "I couldn't process that. Please try again.";
    return NextResponse.json({ reply });

  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json({
      reply: "I'm having a bit of trouble right now — please try again in a moment or email us at teamsq.business@gmail.com",
    });
  }
}
