"use client";

import { useState } from "react";

export function FormInput({
	title,
	onSubmit,
}: { title: string; onSubmit: (value: string) => void }) {
	const [input, setInput] = useState<string>("");

	const handleInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<div
			className="border border-gray-700 shadow-lg rounded-lg p-8 w-80 mb-4"
			style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
		>
			<h1 className="text-2xl font-bold text-center mb-4 text-white">
				{title}
			</h1>
			<input
				className="border border-gray-300 rounded-full p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
				type="text"
				value={input}
				onChange={handleInputKeyword}
				placeholder=""
			/>
			<button
				type="button"
				className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
				onClick={() => onSubmit(input)}
			>
				送信
			</button>
		</div>
	);
}
