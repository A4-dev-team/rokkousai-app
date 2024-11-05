export interface ImageDialogueProps {
    type: "image";
    name: string;
    text: string;
    imageUrls: string[];
}

export const ImageDialogue: React.FC<ImageDialogueProps> = ({ name, text, imageUrls }) => (
    <div>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
        <p className="text-white text-left" style={{ fontSize: "20px" }}>
            {text}
        </p>
         {/* 複数の画像を表示 */}
         <div className="flex flex-wrap gap-4">
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`${name}の画像${index + 1}`} className="w-full h-auto rounded-md" />
            ))}
        </div>
    </div>
);

export default ImageDialogue;
