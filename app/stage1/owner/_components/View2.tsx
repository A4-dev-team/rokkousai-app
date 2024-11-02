import { useEffect } from "react";

interface View2Props {
	onComplete: () => void;
}

const View2 = ({
	setCurrentPage,
}: { setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) => {
	useEffect(() => {
		const timeoutID = setTimeout(() => setCurrentPage(2), 5000);

		return () => clearTimeout(timeoutID);
	}, [setCurrentPage]);

	return (
		<div className="flex items-center justify-center border-4 border-white rounded-full w-80 h-80 bg-transparent relative z-10">
			<h1 className="text-4xl text-center text-yellow-500">
				Mission <br />
				Clear
			</h1>
		</div>
	);
};

export default View2;
