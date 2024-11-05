"use client";
import { useState, useEffect } from "react";
import { View1 } from "./_components/View1";
import { View2 } from "./_components/View2";

export default function Page() {
	const [isView1, setIsView1] = useState(true);

	useEffect(() => {
		// localStorage の値をチェック
		const isCleared = localStorage.getItem("room302Accessible");
		if (isCleared === "true") {
			setIsView1(false);
		}
	}, []);

	return <>{isView1 ? <View1 /> : <View2 />}</>;
}
