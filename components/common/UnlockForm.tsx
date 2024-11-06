import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Button コンポーネント
import { Input } from "@/components/ui/input"; // Input コンポーネント
import { FaTimes } from "react-icons/fa"; // アイコン（閉じるボタン用）

interface UnlockFormProps {
	stageName: string;
	onUnlock: (success: boolean) => void;
	onClose: () => void;
}

export function UnlockForm({ stageName, onUnlock, onClose }: UnlockFormProps) {
	const [input, setInput] = useState<string>(""); // 入力された値
	const [unlockKeyword, setUnlockKeyword] = useState<string>(""); // キーワード

	// stageName に基づいてキーワードを設定
	useEffect(() => {
		if (stageName === "Stage2") {
			setUnlockKeyword("meal"); // Stage2用のキーワード
		} else if (stageName === "Stage3") {
			setUnlockKeyword("大学"); // Stage3用のキーワード
		}
	}, [stageName]);

	// 入力が変更された時
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	// フォームが送信された時
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const success = input === unlockKeyword; // 入力がキーワードと一致するかを確認
		onUnlock(success); // 成功/失敗を親に通知
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
			<div className="relative p-6 bg-white rounded-xl shadow-lg">
				<h3 className="text-xl font-bold mb-4">{stageName} ロック解除</h3>

				{/* フォーム */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 bg-gray-400 bg-opacity-70 shadow-xl rounded-xl border-0 p-8 w-80"
				>
					<Input
						className="bg-white rounded-full placeholder:text-gray-400 px-4 text-black"
						type="text"
						value={input}
						onChange={handleInputChange}
						placeholder="キーワードを入力してください"
					/>
					<Button
						type="submit"
						className="bg-blue-600 text-white hover:bg-blue-700"
					>
						決定
					</Button>
				</form>

				{/* 閉じるボタン */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-600"
				>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}
