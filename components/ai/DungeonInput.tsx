"use client";
import { useChat } from "ai/react";

export default function DungeonInput() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "/api/chat",
	});
	return (
		<div className="w-full">
			<form onSubmit={handleSubmit}>
				<label
					htmlFor="about"
					className=" read-only: block text-sm font-medium leading-6 text-gray-900">
					About
				</label>
				<div className="mt-2 flex items-center justify-center space-x-4">
					<textarea
						id="about"
						name="about"
						rows={1}
						className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={input}
						onChange={handleInputChange}
						placeholder="Write something..."
					/>
					<button
						type="submit"
						className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-">
						Submit
					</button>
				</div>
			</form>
			{messages.map((message) => (
				<div key={message.id}>
					{message.role === "user" ? "Player" : "Dungeon Master"}
					{message.content}
				</div>
			))}
		</div>
	);
}
