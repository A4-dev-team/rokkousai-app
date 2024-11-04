"use client";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLock, FaTimes, FaBars } from "react-icons/fa";

interface SideMenuProps {
	stageName: string;
	menuItems: {
		title: string;
		href: string;
	}[];
	accessible: boolean;
}

const SideMenu: React.FC = () => {
	const [stages, setStages] = useState<SideMenuProps[]>([]);
	const [isOpen, setIsOpen] = useState(false); // サイドメニューの表示状態を管理

	useEffect(() => {
		// LocalStorageからステージのアクセス権を取得する
		const initialStages: SideMenuProps[] = [
			{
				stageName: 'Stage1',
				menuItems: [
					{ title: 'View1', href: '/stage1/view1' },
					{ title: 'View2', href: '/stage1/view2' },
				],
				accessible: localStorage.getItem('stage1Accessible') === 'true',
			},
			{
				stageName: 'Stage2',
				menuItems: [
					{ title: 'View1', href: '/stage2/view1' },
					{ title: 'View2', href: '/stage2/view2' },
					{ title: 'View3', href: '/stage2/view3' },
				],
				accessible: localStorage.getItem('stage2Accessible') === 'true',
			},
			{
				stageName: 'Stage3',
				menuItems: [
					{ title: 'View1', href: '/stage3/view1' },
				],
				accessible: localStorage.getItem('stage3Accessible') === 'true',
			},
		];
		setStages(initialStages);
	}, []);

	return (
		<div className="relative">
			{/* ハンバーガーメニュー */}
			<button
				className="p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen && <FaBars className="text-black " />}
			</button>

			{/* サイドメニュー */}
			{isOpen && (
				<aside className="flex flex-col w-64 h-full p-6 gap-6 bg-gray-900 text-white shadow-lg absolute top-0 left-0 z-50">
					<h2 className="flex justify-between items-center text-xl font-bold text-gray-300">
						MENU
						<button
							onClick={() => setIsOpen(!isOpen)}
						>
							<FaTimes />
						</button>
					</h2>

					<ul className="space-y-4">
						{stages.map((stage, index) => (
							<li key={index} className="group">
								<div className="flex items-center gap-3 transition duration-200 ease-in-out">
									<span className={`font-semibold ${stage.accessible ? 'text-gray-300 group-hover:text-white' : 'text-gray-500'}`}>
										{stage.accessible ? (
											stage.stageName
										) : (
											<>
												<FaLock className="inline mr-1" />
												{`${stage.stageName} - Locked`}
											</>
										)}
									</span>
								</div>

								{stage.accessible && (
									<ul className="ml-8 mt-2 space-y-3">
										{stage.menuItems.map((item) => (
											<li
												key={item.href}
												className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-150"
											>
												<Link href={item.href}>{item.title}</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</aside>
			)}
		</div>
	);
};

export default SideMenu;