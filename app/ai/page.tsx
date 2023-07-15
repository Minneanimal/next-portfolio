import DungeonMaster from "@/components/ai/dungeonMaster";

export default function AIPage() {
	return (
		<div className="flex w-full justify-center">
			<aside className="bg-red-500 w-1/4">Profile</aside>
			<main className="bg-green-500 w-2/4">
				<DungeonMaster />
			</main>
			<aside className="bg-blue-500 w-1/4">quests</aside>
		</div>
	);
}
