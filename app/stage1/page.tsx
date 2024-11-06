"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OldPage() {
	const router = useRouter();

	useEffect(() => {
		// 条件に応じてリダイレクト
		router.push("/stage1/1st-floor");
	}, [router]);

	return <p>Redirecting...</p>; // ユーザーにリダイレクト中のメッセージを表示
}
