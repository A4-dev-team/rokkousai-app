"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { DialogueProps, DialogueController} from "@/components/common/DialogueController";

export function View1() {
  const dialogues: DialogueProps[] = [
    { type: "text", name: "", text: "誰もいないようだ" }
  ];

  return (
    <div className="h-full flex flex-col justify-end">
      <ScrollableChatWindow>
        <DialogueController dialogues={dialogues} />
      </ScrollableChatWindow>
    </div>
  );
}
