import "./globals.css";
import React from "react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SideMenu = () => {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <aside className="bg-gray-800 text-white p-5 w-52 fixed top-0 left-0 h-full flex flex-col">
            <h2 className="mb-4">MENU</h2>
            <ul>
              <li>
                場所
                <ul className="ml-4">
                  <li>賃貸</li>
                  <li>えーごはん</li>
                  <li>授業・学内マップ</li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </body>
    </html>
  );
};

export default SideMenu;
