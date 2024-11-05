export interface TextDialogueProps {
    type: "text";
    name: string;
    text: string;
}

export const TextDialogue: React.FC<TextDialogueProps> = ({ name, text }) => (
    <div>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
        <p className="text-white text-left" style={{ fontSize: "20px" }}>
            {text}
        </p>
    </div>
);

export default TextDialogue;