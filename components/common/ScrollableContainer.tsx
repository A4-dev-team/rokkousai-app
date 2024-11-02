export function ScrollableContainer({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="bg-black bg-opacity-50 p-4 overflow-scroll max-h-[35%] z-20">
			{children}
		</div>
	);
}
