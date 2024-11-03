"use client";
import { CircleDialog } from "@/components/common/CircleDialog";
import { DarkOverlay } from "@/components/common/DarkOverlay";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Scene2() {
	const router = useRouter();
	const { getTokenizedRoute } = useGetTokenizedRoute();
	const pushUrl = getTokenizedRoute("/stage2/matumoto/scene-3");

	useEffect(() => {
		const timeoutID = setTimeout(() => router.push(pushUrl), 3000);

		return () => clearTimeout(timeoutID);
	}, [router, pushUrl]);

	return (
		<div className="h-full flex justify-center items-center">
			<DarkOverlay />
			<CircleDialog>
				<h1 className="text-4xl text-center text-white">
					Mission
					<br /> 「謎の紙を解読せよ」
				</h1>
			</CircleDialog>
		</div>
	);
}
