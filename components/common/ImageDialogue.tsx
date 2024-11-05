export interface ImageDialogueProps {
    type: "image";
    name: string;
    text: string;
    imageUrl: string;
}

export const ImageDialogue: React.FC<ImageDialogueProps> = ({ name, text, imageUrl }) => (
    <div>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
        <p className="text-white text-left" style={{ fontSize: "20px" }}>
            {text}
        </p>
        <img src={imageUrl} alt={name} className="w-full h-auto rounded-md" />
    </div>
);

export default ImageDialogue;
