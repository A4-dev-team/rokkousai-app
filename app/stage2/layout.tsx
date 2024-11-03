import { CommonLayout } from "@/components/layout/CommonLayout";
import type React from "react";

const stageName = "Stage2 「えーごはん」";
const menuItems = [
	{
		title: "店長",
		href: "/stage2/manager",
	},
	{
		title: "上田",
		href: "/stage2/ueda",
	},
	{
		title: "松本",
		href: "/stage2/matumoto/scene-1",
	},
	{
		title: "えーごはん",
		href: "",
	},
];

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<CommonLayout stageName={stageName} menuItems={menuItems}>
			{children}
		</CommonLayout>
	);
}
