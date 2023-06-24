import Navbar from "@/components/navbar";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Brandon Kiel",
	description: "I'm a software engineer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
