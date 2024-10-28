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
			{/*<main className="flex-1 flex justify-center items-center p-5">*/}
			{/*	<div className="bg-white rounded-xl shadow-lg p-5 max-w-xs w-full text-center">*/}
			{/*		<div className="bg-black bg-opacity-60 text-white p-3 rounded-b-xl h-36 overflow-y-scroll">*/}
			{/*			<h3 className="text-lg font-bold mb-2">{children.name}</h3>*/}
			{/*			<p className="text-sm">{children.comment}</p>*/}
			{/*		</div>*/}
			{/*		<button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">*/}
			{/*			{children.button}*/}
			{/*		</button>*/}
			{/*	</div>*/}
			{/*</main>*/}
		</html>
	);
}
