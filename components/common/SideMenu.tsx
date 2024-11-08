"use client";
import { FormInput } from "@/components/common/FormInput";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaLock, FaTimes } from "react-icons/fa";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";

type StageMenuItem = {
	stageId: number;
	stageName: string;
	scenes: {
		name: string;
		href: string;
	}[];
};

const stageMenuItems: StageMenuItem[] = [
	{
		stageId: 1,
		stageName: "Stage1 「賃貸」",
		scenes: [
			{ name: "1階", href: "/stage1/1st-floor" },
			{ name: "2階", href: "/stage1/2nd-floor" },
			{ name: "3階", href: "/stage1/3rd-floor" },
			{ name: "4階", href: "/stage1/4th-floor" },
		],
	},
	{
		stageId: 2,
		stageName: "Stage2「えーごはん」",
		scenes: [
			{ name: "店長", href: "/stage2/manager" },
			{ name: "上田", href: "/stage2/ueda" },
			{ name: "松本", href: "/stage2/matumoto" },
		],
	},
	{
		stageId: 3,
		stageName: "Stage3「授業・学内マップ」",
		scenes: [
			{ name: "ロイ先生", href: "/stage3/roi" },
			{ name: "水島先生", href: "/stage3/mizusima" },
			{ name: "兼松先生", href: "/stage3/kakematu" },
			{ name: "田崎先生", href: "/stage3/tazaki" },
		],
	},
];

const itemMenuItems = [
	{
		name: "SHINDAI HUB 賃貸",
		href: "https://shindaihub-rentalhouse.glide.page/",
	},
	{
		name: "えーごはん",
		href: "https://shindaihub-meal.vercel.app/restaurants",
	},
	{ name: "SHINDAI HUB 授業", href: "https://shindaihub-class.glide.page/" },
	{
		name: "SHINDAI HUB 学内マップ",
		href: "https://kobe-uni-hub.vercel.app/campus-map",
	},
	{ name: "ヒント用LINE", href: "https://lin.ee/3fs2lU1" },
	{ name: "学生便覧", href: "/stage3/2025_Zyochi" },
];

export default function SideMenu() {
	const [stage1Accessible, setStage1Accessible] = useLocalStorage(
		"stage1Accessible",
		"",
	);
	const [stage2Accessible, setStage2Accessible] = useLocalStorage(
		"stage2Accessible",
		"",
	);
	const [stage3Accessible, setStage3Accessible] = useLocalStorage(
		"stage3Accessible",
		"",
	);

	const [isOpen, setIsOpen] = useState(false);
	const [expandedStageId, setExpandedStageId] = useState<number | null>(null);
	const [unlockingStageId, setUnlockingStageId] = useState<number | null>(null);

	const isStageAccessible = (stageId: number) => {
		if (stageId === 1) {
			return stage1Accessible === "true";
		}
		if (stageId === 2) {
			return stage2Accessible === "true";
		}
		if (stageId === 3) {
			return stage3Accessible === "true";
		}
		return true;
	};

	const handleClickStageItem = (stageId: number) => {
		if (isStageAccessible(stageId)) {
			setExpandedStageId((prev) => (prev === stageId ? null : stageId));
		} else {
			setUnlockingStageId(stageId);
		}
	};

	const handleUnlock = (value: string) => {
		if (unlockingStageId === null) {
			return;
		}
		if (unlockingStageId === 1 && value === "A4マンション") {
			setUnlockingStageId(null);
			return setStage1Accessible("true");
		}
		if (unlockingStageId === 2 && value === "かみ食堂でMEAL") {
			setUnlockingStageId(null);
			return setStage2Accessible("true");
		}
		if (unlockingStageId === 3 && value === "大学") {
			setUnlockingStageId(null);
			return setStage3Accessible("true");
		}
		alert("キーワードが間違っています");
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
				<aside className="flex flex-col w-80 min-h-screen p-6 gap-6 bg-gray-900 text-white shadow-lg absolute top-0 left-0 z-50">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-bold text-gray-300">MENU</h2>
						<button type="button" onClick={() => setIsOpen(!isOpen)}>
							<FaTimes />
						</button>
					</div>

					<ul className="space-y-4">
						{stageMenuItems.map((stage) => (
							<div key={stage.stageName} className="flex flex-col gap-2">
								<li className="group">
									<button
										type="button"
										className="cursor-pointer transition duration-200 ease-in-out"
										onClick={() => handleClickStageItem(stage.stageId)}
									>
										{isStageAccessible(stage.stageId) ? (
											<div className="flex items-center gap-2 font-semibold">
												{expandedStageId === stage.stageId ? (
													<VscTriangleDown className="text-gray-300 group-hover:text-white" />
												) : (
													<VscTriangleRight className="text-gray-300 group-hover:text-white" />
												)}
												<span className="text-gray-300 group-hover:text-white">
													{stage.stageName}
												</span>
											</div>
										) : (
											<div className="flex items-center gap-2 font-semibold">
												<FaLock className="inline mr-1 text-gray-500" />
												<span className="text-gray-500">{stage.stageName}</span>
											</div>
										)}
									</button>
								</li>
								{expandedStageId === stage.stageId && (
									<ul className="ml-8 space-y-3">
										{stage.scenes.map((item) => (
											<li
												key={item.href}
												className="text-gray-300 hover:text-white transition duration-150"
											>
												<Link href={item.href}>{item.name}</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						))}
					</ul>

					<ul className="space-y-4">
						<li className="group">
							<span>アイテム</span>
							<ul className="ml-4 mt-2 space-y-3">
								{itemMenuItems.map((item) => (
									<li
										key={item.href}
										className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-150"
									>
										<Link href={item.href}>{item.name}</Link>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</aside>
			)}

			{/* ロック解除フォーム（Stage2 または Stage3） */}
			{unlockingStageId !== null && (
				<div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
					<div className="w-96 flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
						<div className="w-full flex justify-between items-center">
							<h3 className="text-xl font-bold">
								{`Unlock Stage${unlockingStageId}`}
							</h3>
							<button
								type="button"
								onClick={() => setUnlockingStageId(null)}
								className="text-gray-600"
							>
								<FaTimes />
							</button>
						</div>
						<FormInput
							placeholder="キーワードを入力してください"
							onSubmit={handleUnlock}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
