export function ScrollableChatWindow({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="bg-black bg-opacity-50 p-4 overflow-y-scroll h-80 z-10">
			{children}
		</div>
	);
}
