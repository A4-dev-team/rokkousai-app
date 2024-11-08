export default function ExampleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<div className="w-40 h-screen text-2xl text-center bg-gray-200">
				Sidebar
			</div>
			<div className="w-full">{children}</div>
		</div>
	);
}
