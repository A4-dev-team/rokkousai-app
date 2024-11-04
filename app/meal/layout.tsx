import { CommonLayout } from "@/components/layout/CommonLayout";
import type React from "react";

const stageName = "Stage1 「賃貸」";
const menuItems = [
	{ title: "エントランス", href: "/stage1/entrance" },
	{ title: "2階", href: "/stage1/2nd-floor" },
	{ title: "3階", href: "/stage1/3rd-floor" },
	{ title: "4階", href: "/stage1/4th-floor" },
	{ title: "大家に話を聞きにいく", href: "/stage1/owner/scene-1" },
	{ title: "SHINDAI HUB 賃貸", href: "" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full rounded-xl relative bg-cover bg-center bg-[url('/building.png')]">
			<CommonLayout stageName={stageName} menuItems={menuItems}>
				{children}
			</CommonLayout>
		</div>
	);
}
