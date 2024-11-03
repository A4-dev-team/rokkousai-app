// import React, { useEffect } from 'react';

// interface View4Props {
//   onComplete: () => void;
// }

// const View4: React.FC<View4Props> = ({ onComplete }) => {
//   useEffect(() => {

//     const timer = setTimeout(() => {
//       onComplete();
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/building.png')]">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="flex items-center justify-center border-4 border-white rounded-full w-80 h-80 bg-transparent relative z-10">
//         <h1 className="text-4xl text-center text-yellow-500">
//           Mission <br />Clear
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default View4;

"use client";
import { CircleDialog } from "@/components/common/CircleDialog";
import { DarkOverlay } from "@/components/common/DarkOverlay";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function View4() {
	const router = useRouter();
	const { getTokenizedRoute } = useGetTokenizedRoute();
	const pushUrl = getTokenizedRoute("/stage1/room302/view-4");

	useEffect(() => {
		const timeoutID = setTimeout(() => router.push(pushUrl), 3000);

		return () => clearTimeout(timeoutID);
	}, [router, pushUrl]);

	return (
		<div className="h-full flex justify-center items-center">
			<DarkOverlay />
			<CircleDialog>
				<h1 className="text-4xl text-center text-yellow-500">
					Mission
					<br /> Clear
				</h1>
			</CircleDialog>
		</div>
	);
}
