import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest } from "next/server";

export const config = {
	runtime: "edge",
	unstable_allowDynamic: [
		// This is currently required because `qs` uses `side-channel` which depends on this.
		"/node_modules/function-bind/**",
	],
};

export default async (request: NextRequest) => {
	const openai = new OpenAI();

	// Extract the `messages` from the body of the request
	const { messages } = await request.json();

	// Ask OpenAI for a streaming chat completion given the prompt
	const streamResponse = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		stream: true,
		messages,
	});

	// @ts-expect-error openai currently use node-fetch types which are incompatible with web types
	const stream = OpenAIStream(streamResponse.response);

	// Respond with the stream
	return new StreamingTextResponse(stream);
};
