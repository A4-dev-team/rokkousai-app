"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Scene3() {
	const router = useRouter();
	const { getTokenizedRoute } = useGetTokenizedRoute();
	const pushUrl = getTokenizedRoute("/stage1/owner/scene-4");

	useEffect(() => {
		const timeoutID = setTimeout(() => router.push(pushUrl), 3000);

		return () => clearTimeout(timeoutID);
	}, [router, pushUrl]);

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<h1 className="text-3xl text-green-400">
					3階から302に行けるようになった
				</h1>
			</ScrollableChatWindow>
		</div>
	);
}
