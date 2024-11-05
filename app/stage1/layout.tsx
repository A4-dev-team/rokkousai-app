import { CommonLayout } from "@/components/layout/CommonLayout";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <CommonLayout>{children}</CommonLayout>;
}
