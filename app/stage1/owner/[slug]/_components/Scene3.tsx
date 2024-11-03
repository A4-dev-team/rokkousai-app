"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { useGetTokenizedRoute } from "@/hooks/useGetTokenizedRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Scene3() {
  return (
    <div className="h-full flex flex-col justify-end">
      <ScrollableChatWindow>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">主人公</h2>
        <p className="text-white text-center" style={{ fontSize: "20px" }}>
          部屋の番号は…そうだ、302号室です。
        </p>

        <h2 className="text-white text-2xl font-bold mb-4 text-left">大家</h2>
        <p className="text-white text-center" style={{ fontSize: "20px" }}>
          302号室ね。それなら確かに大学生が住んでた部屋だわ。引っ越すときも荷物を夜遅くに運び出していたし、今思うと少し妙な感じもしていたの。
        </p>
        <h2 className="text-white text-2xl font-bold mb-4 text-left">主人公</h2>
        <p className="text-white text-center" style={{ fontSize: "20px" }}>
          そうなんですか…もしよろしければ、302号室を見せていただけませんか？何か手がかりが残っているかもしれません。
        </p>

        <h2 className="text-white text-2xl font-bold mb-4 text-left">大家</h2>
        <p className="text-white text-center" style={{ fontSize: "20px" }}>
          そうね…それくらいなら大丈夫よ。念のため、私も一緒に行くわね。
        </p>
        <h1 className="text-3xl text-green-400">
          （主人公は正しい部屋番号を伝え、大家の信頼を得ることができた。302号室へのアクセスが可能になった。）
        </h1>
      </ScrollableChatWindow>
    </div>
  );
}