export default function RentalLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative flex items-center justify-center h-full p-4 rounded-xl bg-cover bg-center bg-[url('/building.png')]">
			<div className="absolute rounded-xl inset-0 bg-black opacity-50" />
			{children}
		</div>
	);
}
