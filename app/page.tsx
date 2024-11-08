'use client';
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-[url('/background.png')]">
      <div className="absolute top-0 left-0 w-12 h-12 bg-white rounded-lg shadow-lg"></div>
			<div className="flex flex-col items-center max-w-lg bg-white bg-opacity-80 p-6 rounded-lg shadow-lg fixed">
        <h1 className="text-2xl font-bold mb-2">Thank you for coming !!!</h1>
				<div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-3" role="alert">
					<p className="font-bold text-left flex items-center space-x-1"><IoInformationCircleOutline />最初にすること</p>
					<p className="text-sm text-left">オープニング動画を見て犯人のメッセージを確認しよう！</p>
				</div>
				<div>
					{/* YouTube動画埋め込み */}
					<iframe 
						width="100%" 
						src="https://www.youtube.com/embed/mwjFAGeo7v4?si=JjequE6UhrldwNbI" 
						title="YouTube video player" 
						frameBorder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerPolicy="strict-origin-when-cross-origin" 
						allowFullScreen>
					</iframe>
					</div>
				</div>
    </div>
  );
}
