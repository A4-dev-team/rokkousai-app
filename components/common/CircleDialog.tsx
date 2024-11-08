export function CircleDialog({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-center items-center border-4 border-white rounded-full w-80 h-64 z-10">
			{children}
		</div>
	);
}
