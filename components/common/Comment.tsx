import React from "react";

export function Comment({ comment }: { comment: string }) {
	return (
		<main className="flex-1 flex justify-center items-center p-5">
			<div className="bg-white rounded-xl shadow-lg p-5 max-w-xs w-full text-center">
				<div className="bg-black bg-opacity-60 text-white p-3 rounded-b-xl h-36 overflow-y-scroll">
					<p className="text-sm">{comment}</p>
				</div>
			</div>
		</main>
	);
}
