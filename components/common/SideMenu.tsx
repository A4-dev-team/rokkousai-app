import React from "react";

export function SideMenu() {
	return (
		<aside className="flex flex-col w-52 h-full p-5 gap-4 bg-gray-800 text-white">
			<h2>MENU</h2>
			<ul>
				<li>
					場所
					<ul className="ml-4">
						<li>賃貸</li>
						<li>えーごはん</li>
						<li>授業・学内マップ</li>
					</ul>
				</li>
			</ul>
		</aside>
	);
}
