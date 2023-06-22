"use client";
import { motion } from "framer-motion";

type Props = {
	text: string;
};
export default function TextAnimation({ text }: Props) {
	return (
		<motion.div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% sm:text-6xl bg-clip-text text-transparent">
			{text.split("").map((letter, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2, delay: index * 0.1 }}
				>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
}
