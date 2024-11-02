"use client";
import { useSearchParams } from "next/navigation";

export function useGetTokenizedRoute() {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const getTokenizedRoute = (path: string) => {
		return token ? `${path}?token=${token}` : path;
	};

	return { getTokenizedRoute };
}
