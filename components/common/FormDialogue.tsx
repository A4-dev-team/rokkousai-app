// TODO: Add form component
export interface FormDialogueProps {
    type: "form";
    name: string;
    text: string;
    form: string;
}

export const FormDialogue: React.FC<FormDialogueProps> = ({ name, text, form }) => (
    <div>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
        <p className="text-white text-left" style={{ fontSize: "20px" }}>
            {text}
        </p>
        <div className="text-white text-left">{form}</div>
    </div>
);
