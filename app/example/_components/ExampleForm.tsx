import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// このコンポーネントはapp/exampleのスコープ（範囲）でのみ使用される
// このコンポーネントはそれ以外の場所から呼び出されるべきでない

// 各コンポーネントは単一の責任を持つべきであり、このコンポーネントはUIのみを担当する
// つまり、このコンポーネントはsubmitされた時に何をするかは知るべきでない（親コンポーネントが管理している）
// この程度であれば分離しなくても良いが、考え方として各コンポーネントが単一の責任を持つことを意識するのは重要
export function ExampleForm({
	inputValue,
	onChange,
	onSubmit,
}: {
	inputValue: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<form onSubmit={onSubmit} className="flex items-center gap-x-2">
			<Input value={inputValue} onChange={onChange} className="w-96" />
			<Button type="submit">送信</Button>
		</form>
	);
}
