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
	onOpenImageModal?: (url: string) => void;
}

export function DialogueController(props: DialogueControllerProps) {
	const { dialogues, onOpenImageModal } = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isQuestionCleared, setIsQuestionCleared] = useState(false);

	const accessibleNext = () => {
		if (dialogues[currentIndex].type === "form") {
			return isQuestionCleared;
		}
		return true;
	};

	const handlePrevious = () => {
		setCurrentIndex(currentIndex - 1);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const handleClear = () => {
		setIsQuestionCleared(true);
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
			if (!onOpenImageModal) {
				return null;
			}

			return (
				<ImageDialogue
					type={dialogue.type}
					name={dialogue.name}
					text={dialogue.text}
					imageUrls={dialogue.imageUrls}
					onOpenModal={onOpenImageModal}
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
					onClear={handleClear}
				/>
			);
		}
		return null;
	};

	return (
		<div className="h-full flex flex-col justify-between">
			{renderDialogueContent(dialogues[currentIndex])}
			<div className="grid grid-cols-3 items-center mt-4">
				<div className="col-span-1 flex justify-start items-center">
					{currentIndex > 0 && (
						<button
							type="button"
							className="flex items-center gap-2 p-2 text-white"
							onClick={handlePrevious}
						>
							<HiChevronDoubleLeft />
							<span>戻る</span>
						</button>
					)}
				</div>
				<div className="col-span-1 flex justify-center items-center">
					<span className="text-white text-center">
						{currentIndex + 1} / {dialogues.length}
					</span>
				</div>
				<div className="col-span-1 flex justify-end items-center">
					{currentIndex < dialogues.length - 1 && accessibleNext() && (
						<button
							type="button"
							className="flex items-center gap-2 p-2 text-white"
							onClick={handleNext}
						>
							<span>次へ</span>
							<HiChevronDoubleRight />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
