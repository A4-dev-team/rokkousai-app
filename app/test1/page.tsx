"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type SceneType = {
	sceneId: number;
	keyword: string;
	color: string;
};

const scenes: SceneType[] = [
	{ sceneId: 1, keyword: "1", color: "bg-red-500" },
	{ sceneId: 2, keyword: "2", color: "bg-orange-500" },
	{ sceneId: 3, keyword: "3", color: "bg-yellow-500" },
	{ sceneId: 4, keyword: "4", color: "bg-green-500" },
	{ sceneId: 5, keyword: "5", color: "bg-cyan-500" },
	{ sceneId: 6, keyword: "6", color: "bg-blue-500" },
	{ sceneId: 7, keyword: "7", color: "bg-indigo-500" },
	{ sceneId: 8, keyword: "8", color: "bg-purple-500" },
	{ sceneId: 9, keyword: "9", color: "bg-violet-500" },
	{ sceneId: 10, keyword: "10", color: "bg-purple-700" },
];

export default function Page() {
	const [currentSceneId, setCurrentSceneId] = useState<number>(1);
	const [input, setInput] = useState<string>("");
	const [result, setResult] = useState<boolean>();

	const currentScene = scenes.find((scene) => scene.sceneId === currentSceneId);
	const showNext = result && currentSceneId < scenes.length - 1;

	const handleCheckKeyword = () => {
		setResult(input === currentScene?.keyword);
	};

	const handleNext = () => {
		if (currentSceneId < scenes.length - 1) {
			setCurrentSceneId((prev) => prev + 1);
			setInput("");
			setResult(undefined);
		}
	};

	return (
		<div
			className={`h-screen flex flex-col justify-center items-center ${currentScene?.color}`}
		>
			<h1 className="text-4xl">Scene {currentSceneId}</h1>
			<div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg p-8 w-80">
				<h1 className="text-2xl font-bold text-center">キーワードチェック</h1>
				<div className="text-center">キーワードを入力してください</div>
				<Input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="キーワードを入力"
				/>
				<Button type="button" onClick={handleCheckKeyword}>
					送信
				</Button>
				<div className="text-lg text-center text-gray-700">
					{result === undefined
						? "入力してください"
						: result
							? "正解"
							: "不正解"}
				</div>
				<Button type="button" disabled={!showNext} onClick={handleNext}>
					次へ
				</Button>
			</div>
		</div>
	);
}
