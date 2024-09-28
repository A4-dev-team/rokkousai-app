"use client";
import { ExampleForm } from "@/app/example/_components/ExampleForm";
import { useState } from "react";

// コンポーネントの分け方 = 基本的に再利用しないなら複数のコンポーネントに分ける必要はない
// - 部品ごとに分ける
// - 出来るだけ親コンポーネントが状態を管理し、UIコンポーネントはUIのみを担当するように

// Reactの設計思想などを考えて関数宣言で書く
// アロー関数で書くと関数なのか定数なのか分かりづらく、パフォーマンスも良くない
export default function Page() {
	const [inputValue, setInputValue] = useState<string>("");
	const [submittedValue, setSubmittedValue] = useState<string>("");

	// ボタン押下などのイベントにフックして行う処理はhandleXXXという名前を使うのが一般的
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmittedValue(inputValue);
	};

	// onChangeに直接() => setInputValue(e.target.value)と書くこともできるが、
	// JSXにロジックを書くと見通しが悪くなるので、このようなhandleという関数を作るべき
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	// NOTE: mt-5などよりも出来るだけgapを使うようにする = CSSが綺麗になり見通しが良くなる
	return (
		<div className="p-5 flex flex-col gap-y-4 justify-center">
			<h1 className="text-2xl">サンプルページ</h1>
			<ExampleForm
				inputValue={inputValue}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			<div className="flex gap-x-2 items-center">
				<div className="text-lg">送信された文字：</div>
				<div className="text-lg">{submittedValue}</div>
			</div>
		</div>
	);
}
