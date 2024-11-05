"use client";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLock, FaTimes, FaBars } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";

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
	const [expandedStage, setExpandedStage] = useState<number | null>(null); // どのステージが展開されているかを管理


	useEffect(() => {
		// LocalStorageからステージのアクセス権を取得する
		const initialStages: SideMenuProps[] = [
			{
				stageName: 'Stage1 「賃貸」',
				menuItems: [
					{
						title: "1階",
						href: "/stage1/1st-floor",
					},
					{
						title: "2階",
						href: "/stage1/2nd-floor",
					},
					{
						title: "3階",
						href: "/stage1/3rd-floor",
					},
					{
						title: "4階",
						href: "/stage1/4th-floor",
					},
					{
						title: "大家に話を聞きにいく",
						href: "/stage1/owner/scene-1",
					},
					{
						title: "SHINDAI HUB 賃貸",
						href: "https://shindaihub-rentalhouse.glide.page/",
					},
				],
				accessible: true,
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

	const toggleStage = (index: number) => {
		setExpandedStage(expandedStage === index ? null : index); // ステージをトグル
	};

	return (
		<div className="relative ">
			{/* ハンバーガーメニュー */}
			<button
				className="p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen && <FaBars className="text-black " />}
			</button>

			{/* サイドメニュー */}
			{isOpen && (
				<aside className="flex flex-col w-64 min-h-screen p-6 gap-6 bg-gray-900 text-white shadow-lg absolute top-0 left-0 z-50">
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
								<div
									className="flex items-center gap-3 cursor-pointer transition duration-200 ease-in-out"
									onClick={() => toggleStage(index)} // ステージをクリックしたときのハンドラ
								>
									<span className={`font-semibold ${stage.accessible ? 'text-gray-300 group-hover:text-white' : 'text-gray-500'}`}>
										{stage.accessible ? (
											<>
												{expandedStage === index ? <VscTriangleDown className="inline mr-1" /> : <VscTriangleRight className="inline mr-1" />}
												{stage.stageName}
											</>
										) : (
											<>
												<FaLock className="inline mr-1" />
												{`${stage.stageName} - Locked`}
											</>
										)}
									</span>
								</div>

								{stage.accessible && expandedStage === index && ( // トグルで展開される子メニュー
									<ul className="ml-8 mt-2 space-y-3">
										{stage.menuItems.map((item) => (
											<li
												key={item.href}
												className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-150"
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