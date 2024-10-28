import type { Metadata } from "next";
import "./globals.css";
import { SideMenu } from "@/components/common/SideMenu";
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
			<body className="flex h-screen overflow-hidden">
				<SideMenu />
				<main className="flex justify-center h-full p-5 flex-1">
					<div className="max-w-md w-full rounded-xl shadow-lg text-center">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
