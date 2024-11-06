import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FormDialogue, type FormDialogueProps } from "./FormDialogue";
import { ImageDialogue, type ImageDialogueProps } from "./ImageDialogue";
import { TextDialogue, type TextDialogueProps } from "./TextDialogue";

export type DialogueProps =
	| TextDialogueProps
	| ImageDialogueProps
	| FormDialogueProps;

interface DialogueControllerProps {
	dialogues: DialogueProps[];
}

export default function DialogueController(props: DialogueControllerProps) {
	const { dialogues } = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const accessibleNext = dialogues[currentIndex].type !== "form";

	const handlePrevious = () => {
		setCurrentIndex(currentIndex - 1);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const handleFormClear = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const renderDialogueContent = (dialogue: DialogueProps) => {
		if (dialogue.type === "text") {
			return (
				<TextDialogue
					type={dialogue.type}
					name={dialogue.name}
					text={dialogue.text}
				/>
			);
		}
		if (dialogue.type === "image") {
			return (
				<ImageDialogue
					type={dialogue.type}
					name={dialogue.name}
					text={dialogue.text}
					imageUrls={dialogue.imageUrls}
				/>
			);
		}
		if (dialogue.type === "form") {
			return (
				<FormDialogue
					type={dialogue.type}
					name={dialogue.name}
					text={dialogue.text}
					formName={dialogue.formName}
					formPlaceholder={dialogue.formPlaceholder}
					answer={dialogue.answer}
					hint={dialogue.hint}
					onClear={handleFormClear}
				/>
			);
		}
		return null;
	};

	return (
		<div className="dialogue-container ">
			{renderDialogueContent(dialogues[currentIndex])}
			<div className="flex justify-between mt-4 text-center fixed bottom-3">
				{currentIndex > 0 && (
					<button
						type="button"
						className="p-2 text-white rounded flex items-center  mr-20"
						onClick={handlePrevious}
					>
						<HiChevronDoubleLeft className="mr-2" />
						戻る
					</button>
				)}
				<div className="p-2 text-white rounded flex items-center ml-5 mr-5">
					{currentIndex + 1} / {dialogues.length}
				</div>
				{currentIndex < dialogues.length - 1 && accessibleNext && (
					<button
						type="button"
						className="p-2 text-white rounded flex items-center ml-20 "
						onClick={handleNext}
					>
						次へ
						<HiChevronDoubleRight className="ml-2" />
					</button>
				)}
			</div>
		</div>
	);
}
