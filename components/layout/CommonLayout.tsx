import SideMenu from "../common/SideMenu";
import type React from "react";

interface CommonLayoutProps {
	children: React.ReactNode;
}

export function CommonLayout(props: CommonLayoutProps) {
	const { children } = props;
	return (
		<div className="flex h-screen overflow-hidden">
			<SideMenu />
			<div className="flex justify-center h-full p-5 flex-1">
				<div className="max-w-md w-full rounded-xl shadow-lg text-center">
					{children}
				</div>
			</div>
		</div>
	);
}
