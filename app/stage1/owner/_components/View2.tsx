import { CircleDialog } from "@/components/common/CircleDialog";
import { DarkOverlay } from "@/components/common/DarkOverlay";
import { useEffect } from "react";

const View2 = ({
	setCurrentPage,
}: { setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) => {
	useEffect(() => {
		const timeoutID = setTimeout(() => setCurrentPage(3), 5000);

		return () => clearTimeout(timeoutID);
	}, [setCurrentPage]);

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
};

export default View2;
