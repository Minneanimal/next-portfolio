"use client";

import { motion } from "framer-motion";

export default function DungeonText() {
	const text = "Once upon a time there was a dungeon in the middle of nowhere";
	return (
		<motion.div className="text-lg font-bold tracking-tight">
			{text.split("").map((letter, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2, delay: index * 0.1 }}>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
}
