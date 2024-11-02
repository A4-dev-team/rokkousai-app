"use client";

import React, { useState, useEffect } from "react";
import View1 from "./_components/View1";
import View2 from "./_components/View2";
import View3 from "./_components/View3";

export default function Page() {
	const [currentPage, setCurrentPage] = useState<number>(0);

	if (currentPage === 0) {
		return <View1 setCurrentPage={setCurrentPage} />;
	}
	if (currentPage === 1) {
		return <View2 setCurrentPage={setCurrentPage} />;
	}
	if (currentPage === 2) {
		return <View3 />;
	}
	return null;
}
