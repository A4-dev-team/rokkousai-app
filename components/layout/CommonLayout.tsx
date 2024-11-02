import { SideMenu } from "@/components/common/SideMenu";
import type React from "react";

interface CommonLayoutProps {
	children: React.ReactNode;
	stageName: string;
	menuItems: { title: string; href: string }[];
}

export function CommonLayout(props: CommonLayoutProps) {
	const { children, stageName, menuItems } = props;
	return (
		<div className="flex h-screen overflow-hidden">
			<SideMenu stageName={stageName} menuItems={menuItems} />
			<div className="flex justify-center h-full p-5 flex-1">
				<div className="max-w-md w-full rounded-xl shadow-lg text-center">
					{children}
				</div>
			</div>
		</div>
	);
}
