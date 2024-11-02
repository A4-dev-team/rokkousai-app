import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function FormInput({
	placeholder,
	onSubmit,
}: { placeholder: string; onSubmit: (value: string) => void }) {
	const [input, setInput] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(input);
	};

	return (
		<form
			className="flex flex-col gap-4 bg-gray-400 bg-opacity-70 shadow-xl rounded-xl border-0 p-8 w-80"
			onSubmit={handleSubmit}
		>
			<Input
				className="bg-white rounded-full placeholder:text-gray-400 px-4"
				type="text"
				value={input}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
			<Button
				type="submit"
				className="bg-blue-600 text-white hover:bg-blue-700"
			>
				決定
			</Button>
		</form>
	);
}
