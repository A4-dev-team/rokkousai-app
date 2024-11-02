import type { Metadata } from "next";
import "./globals.css";
import type React from "react";

export const metadata: Metadata = {
	title: "Escape Game",
	description: "脱出ゲームアプリ",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
