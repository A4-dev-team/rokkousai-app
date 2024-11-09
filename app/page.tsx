'use client';
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-top bg-[url('/home-background.png')]">
			<div className="flex flex-col items-center bg-white bg-opacity-80 p-8 sm:p-12 rounded-lg shadow-lg fixed w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-2/3 md:h-[70%] overflow-y-auto" >
				<h1 className="text-2xl sm:text-3xl font-bold">Thank you for coming !!!</h1>
				<div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-6 py-4 my-4 w-full" role="alert">
					<p className="font-bold text-left flex items-center space-x-1">
						<IoInformationCircleOutline /> 最初にすること
					</p>
					<p className="text-base sm:text-lg text-left">オープニング動画を見て犯人のメッセージを確認しよう!</p>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<div className="aspect-w-16 aspect-h-9 w-full h-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex justify-center items-center">
						<iframe 
							src="https://www.youtube.com/embed/mwjFAGeo7v4?si=JjequE6UhrldwNbI" 
							title="YouTube video player" 
							frameBorder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							referrerPolicy="strict-origin-when-cross-origin" 
							allowFullScreen
							className="w-full h-full"
						/>
					</div>
				</div>
				<div className="flex flex-col items-start m-6">
					<p className="font-bold pb-1">以下、動画の概要欄の内容</p>
					<p>Mission「犯人のマンションを探せ」</p>
					<p className="text-start">
	アプリのURLに飛んで、左上のメニューから、アイテムのSHINDAI HUB 賃貸を使って、犯人が住んでいる賃貸を見つけ出せ！
	そして、Stage1のロックを解除しよう。
	解除の暗号は&quot;犯人が住んでいるマンションの名前&quot;らしい。</p>
				</div>
    	</div>
    </div>
  );
}
