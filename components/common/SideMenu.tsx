"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface SideMenuProps {
	stageName: string;
	menuItems: {
		title: string;
		href: string;
	}[];
}

export function SideMenu(props: SideMenuProps) {
	const { stageName, menuItems } = props;
	const searchParams = useSearchParams();

	const token = searchParams.get("token");
	const buildLink = (href: string) => {
		return token ? `${href}?token=${token}` : href;
	};

	return (
		<aside className="flex flex-col w-64 h-full p-6 gap-6 bg-gray-900 text-white shadow-lg">
			<h2 className="text-xl font-bold text-gray-300 mb-4">MENU</h2>

			<ul className="space-y-4">
				<li className="group">
					<div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition duration-200 ease-in-out">
						<span className="font-semibold">{stageName}</span>
					</div>

					<ul className="ml-8 mt-2 space-y-3">
						{menuItems.map((item) => (
							<li
								key={item.href}
								className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-150"
							>
								<Link href={buildLink(item.href)}>{item.title}</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</aside>
	);
}
