import type { Metadata } from "next"; //TypeScriptの型をインポート
import localFont from "next/font/local"; //ローカルに保存されたフォントを使用
import "./globals.css"; //グローバルなスタイルを定義
import styles from "./layout.module.css"; // レイアウト用CSS

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

export const metadata: Metadata = {
  title: "Escape Game",
  description: "脱出ゲームアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={styles.container}>
          {/* サイドメニュー */}
          <aside className={styles.sidebar}>
            <h2>menu</h2>
            <ul>
              <li>場所</li>
              <ul>
                <li>本部構内</li>
                <li>おまつり広場</li>
                <li>吉田南総合館</li>
                <li>4共</li>
              </ul>
              <li>アイテム</li>
              <li>お金: 10000円</li>
              <li>オプション</li>
              <li>テキストを隠す/表示する</li>
            </ul>
          </aside>

          {/* メインコンテンツ */}
          <main className={styles.main}>
            <div className={styles.card}>
              <img src="" alt="キャラクター" className={styles.image} />
              <div className={styles.textBox}>
                <h3>クジャク愛好会</h3>
                <p>やあ、こんにちは。我々はクジャク愛好会です。</p>
                <button className={styles.button}>クジャクはどこに？</button>
              </div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
