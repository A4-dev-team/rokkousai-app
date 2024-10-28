import React from "react";

export function Comment({ comment }: { comment: string }) {
	return (
		<div className="p-3 h-36 overflow-y-scroll bg-black bg-opacity-60">
			<p className="text-sm text-white">{comment}</p>
		</div>
	);
}
