import Image from "next/image";
import DungeonText from "./dungeonText";
import DungeonInput from "./DungeonInput";

export default function DungeonMaster() {
	return (
		<div className="flex flex-col w-full items-center justify-center p-2">
			<Image
				src="/ai/the_dungeon_master.jpeg"
				alt="Dungeon Master"
				width={300}
				height={300}
			/>
			<p className="text-center text-2xl font-bold">Dungeon Master</p>
			<DungeonInput />
		</div>
	);
}
