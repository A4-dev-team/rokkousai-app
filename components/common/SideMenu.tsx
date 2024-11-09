"use client";
import { FormInput } from "@/components/common/FormInput";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { useState } from "react";
import { FaLock, FaTimes } from "react-icons/fa";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";
import SuccessModal from "./SuccessModal";
import { useEffect } from "react";

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
			{ name: "えーごはん", href: "https://shindaihub-meal.vercel.app/restaurants"},
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
			{ name: "SHINDAI HUB 授業", 
				href: "https://shindaihub-class.glide.page/" },
			{
				name: "SHINDAI HUB 学内マップ",
				href: "https://kobe-uni-hub.vercel.app/campus-map",
			},
			{ name: "学生便覧", 
				href: "/2025_Zyochi" 
			},
		],
	},
	{
		stageId: 99,
		stageName: "初期アイテム",
		scenes: [
			{
				name: "SHINDAI HUB 賃貸",
				href: "https://shindaihub-rentalhouse.glide.page/",
			},
			{ name: "ヒント用LINE", 
				href: "https://lin.ee/3fs2lU1"
			},
		]
	}
];

export default function SideMenu() {
	const [stage1Accessible, setStage1Accessible] = useLocalStorage(
		"stage1Accessible",
		"false",
	);
	const [stage2Accessible, setStage2Accessible] = useLocalStorage(
		"stage2Accessible",
		"false",
	);
	const [stage3Accessible, setStage3Accessible] = useLocalStorage(
		"stage3Accessible",
		"false",
	);

	useEffect(() => {
		setStage1Accessible(localStorage.getItem("stage1Accessible") || "false");
		setStage2Accessible(localStorage.getItem("stage2Accessible") || "false");
		setStage3Accessible(localStorage.getItem("stage3Accessible") || "false");
	}, [stage1Accessible, stage2Accessible, stage3Accessible]);

	const [isOpen, setIsOpen] = useState(false);
	const [expandedStageId, setExpandedStageId] = useState<number | null>(null);
	const [unlockingStageId, setUnlockingStageId] = useState<number | null>(null);

	const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

	// ステージアクセス権チェックのデバッグログ
	const isStageAccessible = (stageId: number) => {
		console.log(`Checking access for Stage ${stageId}`);
		if (stageId === 1) {
			console.log(`Stage 1 accessible: ${stage1Accessible}`);
			return stage1Accessible === "true";
		}
		if (stageId === 2) {
			console.log(`Stage 2 accessible: ${stage2Accessible}`);
			return stage2Accessible === "true";
		}
		if (stageId === 3) {
			console.log(`Stage 3 accessible: ${stage3Accessible}`);
			return stage3Accessible === "true";
		}
		return true;
	};

	// ステージアイテムクリック時のデバッグログ
	const handleClickStageItem = (stageId: number) => {
		console.log(`Clicked on stage ${stageId}`);
		if (isStageAccessible(stageId)) {
			console.log(`Stage ${stageId} is accessible. Expanding.`);
			setExpandedStageId((prev) => (prev === stageId ? null : stageId));
		} else {
			console.log(`Stage ${stageId} is not accessible. Unlocking.`);
			setUnlockingStageId(stageId);
		}
	};

	// ロック解除時のデバッグログ
	const handleUnlock = (value: string) => {
		console.log(`Attempting to unlock stage ${unlockingStageId} with value: ${value}`);
		if (unlockingStageId === null) {
			console.log("No stage to unlock.");
			return;
		}
		if (unlockingStageId === 1 && value === "A4マンション") {
			console.log("Unlocking Stage1: 賃貸");
			setUnlockingStageId(null);
			setStage1Accessible("true");
			setSuccessMessage("Stage1「賃貸」が解除されました！Stage1をタップして1階から4階まで回ってみましょう！");
			setShowSuccessModal(true);
			return;
		}
		if (unlockingStageId === 2 && value === "かみ食堂でMEAL") {
			console.log("Unlocking Stage2: えーごはん");
			setUnlockingStageId(null);
			setStage2Accessible("true");
			setSuccessMessage("Stage2「えーごはん」が解除されました！");
			setShowSuccessModal(true);
			return;
		}
		if (unlockingStageId === 3 && value === "大学") {
			console.log("Unlocking Stage3: 授業・学内マップ");
			setUnlockingStageId(null);
			setStage3Accessible("true");
			setSuccessMessage("Stage3「授業・学内マップ」が解除されました！");
			setShowSuccessModal(true);
			return;
		}

		// ロック解除失敗時のデバッグログ
		console.log("Keyword incorrect, please try again.");
		if (unlockingStageId !== null) {
			alert("キーワードが間違っています");
		}
	};

	return (
		<div className="relative">
			{/* ハンバーガーメニュー */}
			<button
				type="button"
				className="p-4 focus:outline-none"
				onClick={() => {
					console.log("Toggling menu visibility");
					setIsOpen(!isOpen);
				}}
			>
				{!isOpen && (<p className="text-gray-100 text-2xl">メニュー</p>)}
			</button>

			{isOpen && (
				<aside className="flex flex-col w-72 min-h-screen p-6 gap-6 bg-gray-900 text-white shadow-lg absolute top-0 left-0 z-50">
						<div className="flex justify-between items-center">
								<h2 className="text-xl font-bold text-gray-300 text-left">MENU</h2>
								<button type="button" onClick={() => setIsOpen(!isOpen)}>
										<FaTimes />
								</button>
						</div>

						<ul className="space-y-4 text-left">
								{stageMenuItems.map((stage) => (
										<div key={stage.stageName} className="flex flex-col gap-2">
												<li className="group">
														<button
																type="button"
																className="cursor-pointer transition duration-200 ease-in-out text-left"
																onClick={() => handleClickStageItem(stage.stageId)}
														>
																{isStageAccessible(stage.stageId) ? (
																		<div className="flex items-center gap-2 font-semibold text-left">
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
																		<div className="flex items-center gap-2 font-semibold text-left">
																				<FaLock className="inline mr-1 text-gray-500" />
																				<span className="text-gray-500">{stage.stageName}</span>
																		</div>
																)}
														</button>
												</li>
												{expandedStageId === stage.stageId && (
														<ul className="ml-8 space-y-2 text-left">
																{stage.scenes.map((item) => (
																		<Link key={item.href} href={item.href} passHref>
																			<li className="text-gray-300 hover:text-white transition duration-150 cursor-pointer my-2">
																				{item.name}
																			</li>
																		</Link>
																))}
														</ul>
												)}
										</div>
								))}
						</ul>
				</aside>
			)}
			{/* ロック解除フォーム（Stag1, Stage2, Stage3） */}
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
							placeholder={unlockingStageId === 1 ? "犯人の住んでいるマンション名" : unlockingStageId === 2 ? "△△で〇〇" : unlockingStageId === 3 ? "張り紙のキーワード" : "キーワードを入力してください"}
							onSubmit={handleUnlock}
						/>
					</div>
				</div>
			)}
			<SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={successMessage}
      />
		</div>
	);
}