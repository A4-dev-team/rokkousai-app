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
				<main className="ml-52 flex-1 p-5 flex justify-center h-full">
					<div className="rounded-xl shadow-lg text-center max-w-md w-full mx-auto">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
