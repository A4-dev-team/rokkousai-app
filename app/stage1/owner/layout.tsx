export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full relative bg-cover bg-center bg-[url('/building.png')]">
			<div className="absolute inset-0 bg-white opacity-50" />
			{children}
		</div>
	);
}
