import type { Metadata } from "next";
import { CommonLayout } from "@/components/layout/CommonLayout";
import "./globals.css";
import type React from "react";

export const metadata: Metadata = {
	title: "Escape Game",
	description: "脱出ゲームアプリ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				<CommonLayout>{children}</CommonLayout>
			</body>
		</html>
	);
}
