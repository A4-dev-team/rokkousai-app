export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full rounded-xl relative">
			{/* 背景画像レイヤー */}
			<div 
				className="fixed inset-0 bg-cover bg-center bg-[url('/rental-ooya.png')] rounded-xl"
				style={{ zIndex: -1 }}
			/>
			
			{/* コンテンツレイヤー */}
			<div className="relative h-full">
				{children}
			</div>
		</div>
	);
}
