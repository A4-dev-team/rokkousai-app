import { CommonLayout } from "@/components/layout/CommonLayout";
import type React from "react";

const stageName = "Stage1 「賃貸」";
const menuItems = [
	{
		title: "エントランス",
		href: "/stage1/entrance",
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
		href: "/stage1/owner",
	},
	{
		title: "SHINDAI HUB 賃貸",
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
