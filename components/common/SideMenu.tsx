"use client";
import { useState, useEffect } from "react";
import { FaLock, FaTimes, FaBars } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import { FormInput } from "@/components/common/FormInput"; // フォーム入力コンポーネント
import Link from "next/link";
import type React from "react";

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
	const [isFormVisible, setIsFormVisible] = useState(false); // フォームの表示状態
	const [currentUnlockStage, setCurrentUnlockStage] = useState<number | null>(
		null,
	); // 現在ロック解除中のステージ
	const [unlockKeyword, setUnlockKeyword] = useState<string>(""); // ロック解除キーワード

	useEffect(() => {
		// 初期ステージデータの取得
		const initialStages: SideMenuProps[] = [
			{
				stageName: "Stage1 「賃貸」",
				menuItems: [
					{ title: "1階", href: "/stage1/1st-floor" },
					{ title: "2階", href: "/stage1/2nd-floor" },
					{ title: "3階", href: "/stage1/3rd-floor" },
					{ title: "4階", href: "/stage1/4th-floor" },
					{
						title: "SHINDAI HUB 賃貸",
						href: "https://shindaihub-rentalhouse.glide.page/",
					},
				],
				accessible: true,
			},
			{
				stageName: "Stage2 「かみ食堂」",
				menuItems: [
					{ title: "店長", href: "/stage2/manager" },
					{ title: "上田", href: "/stage2/ueda" },
					{ title: "松本", href: "/stage2/matumoto" },
				],
				accessible: localStorage.getItem("stage2Accessible") === "true",
			},
			{
				stageName: "Stage3 「大学」",
				menuItems: [
					{ title: "ロイ先生", href: "/stage3/roi" },
					{ title: "水島先生", href: "/stage3/mizusima" },
					{ title: "兼松先生", href: "/stage3/kakematu" },
					{ title: "田崎先生", href: "/stage3/tazaki" },
					{ title: "学生便覧", href: "" },
				],

				accessible: localStorage.getItem("stage3Accessible") === "true",
			},
			{
				stageName: "アイテム",
				menuItems: [
					{ title: "SHINDAI HUB", href: "https://kobe-uni-hub.vercel.app/" },
					{ title: "ヒント用LINE", href: "" },
				],
				accessible: true,
			},
		];
		setStages(initialStages);
	}, []);

	// ステージのトグル
	const toggleStage = (index: number) => {
		setExpandedStage(expandedStage === index ? null : index);
	};

	// ロック解除フォームの表示
	const showUnlockForm = (index: number) => {
		setIsFormVisible(true);
		setCurrentUnlockStage(index);
		setUnlockKeyword(index === 1 ? "meal" : "大学"); // Stage2用とStage3用で異なるキーワード
	};

	// ロック解除フォームが送信されたときの処理
	const handleUnlockSubmit = (value: string) => {
		if (value === unlockKeyword) {
			localStorage.setItem(
				currentUnlockStage === 1 ? "stage2Accessible" : "stage3Accessible",
				"true",
			); // Stage2またはStage3のアクセス権をローカルストレージに保存

			// ステージのアクセス状態を更新
			setStages((prevStages) =>
				prevStages.map((stage, index) =>
					index === currentUnlockStage ? { ...stage, accessible: true } : stage,
				),
			);
			setIsFormVisible(false);
		} else {
			alert("キーワードが間違っています");
		}
	};

	return (
		<div className="relative">
			{/* ハンバーガーメニュー */}
			<button
				type="button"
				className="p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen && <FaBars className="text-black" />}
			</button>

			{/* サイドメニュー */}
			{isOpen && (
				<aside className="flex flex-col w-64 min-h-screen p-6 gap-6 bg-gray-900 text-white shadow-lg absolute top-0 left-0 z-50">
					<h2 className="flex justify-between items-center text-xl font-bold text-gray-300">
						MENU
						<button type="button" onClick={() => setIsOpen(!isOpen)}>
							<FaTimes />
						</button>
					</h2>

					<ul className="space-y-4">
						{stages.map((stage, index) => (
							<li key={stage.stageName} className="group">
								<button
									type="button"
									className="flex items-center gap-3 cursor-pointer transition duration-200 ease-in-out"
									onClick={() =>
										stage.accessible
											? toggleStage(index)
											: showUnlockForm(index)
									}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											// Enterキーで操作
											stage.accessible
												? toggleStage(index)
												: showUnlockForm(index);
										}
									}}
									tabIndex={0} // キーボードでフォーカスできるようにする
								>
									<span
										className={`font-semibold ${
											stage.accessible
												? "text-gray-300 group-hover:text-white"
												: "text-gray-500"
										}`}
									>
										{stage.accessible ? (
											<>
												{expandedStage === index ? (
													<VscTriangleDown className="inline mr-1" />
												) : (
													<VscTriangleRight className="inline mr-1" />
												)}
												{stage.stageName}
											</>
										) : (
											<>
												{/* TODO:  ロックを解除するためのフォームとロジックの追加 */}
												<FaLock className="inline mr-1" />
												{`${stage.stageName} - Locked`}
											</>
										)}
									</span>
								</button>

								{stage.accessible &&
									expandedStage === index && ( // トグルで展開される子メニュー
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

			{/* ロック解除フォーム（Stage2 または Stage3） */}
			{isFormVisible && currentUnlockStage !== null && (
				<div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
					<div className="relative p-6 bg-white rounded-xl shadow-lg">
						<h3 className="text-xl font-bold mb-4">
							{currentUnlockStage === 1 ? "Stage2 Unlock" : "Stage3 Unlock"}
						</h3>
						<FormInput
							placeholder="キーワードを入力してください"
							onSubmit={handleUnlockSubmit}
						/>
						<button
							type="button"
							onClick={() => setIsFormVisible(false)}
							className="absolute top-2 right-2 text-gray-600"
						>
							<FaTimes />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SideMenu;
