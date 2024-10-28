"use client";

import React, { useState, useEffect } from "react";
import View1 from "./_components/View1";
import View2 from "./_components/View2";
import View3 from "./_components/View3";

export default function Page() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = 3;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPage((prevPage) => {
				return prevPage < totalPages ? prevPage + 1 : prevPage;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return currentPage === 1 ? (
		<View1 />
	) : currentPage === 2 ? (
		<View2 />
	) : currentPage === 3 ? (
		<View3 />
	) : null;
}
