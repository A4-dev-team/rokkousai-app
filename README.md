## 起動

```bash
npm run dev
```

## node_modules更新

```bash
npm install
```

## 使用技術
| 技術           | ドキュメント                                                         |
|--------------|----------------------------------------------------------------|
| プログラミング言語    | [TypeScript](https://www.typescriptlang.org/docs/)             |
| ライブラリ        | [React](https://ja.react.dev/reference/react)                  |
| フレームワーク      | [NextJS App Router](https://nextjs.org/docs)                   |
| CSS          | [Tailwind CSS](https://tailwindcss.com/docs/installation)      |
| コンポーネントライブラリ | [shadcn/ui](https://ui.shadcn.com/docs/components/collapsible) |
## ディレクトリ構成（重要な部分のみ抜粋）

```
.
├── app
│   ├── example
│   │   ├── _components
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── common
│   └── ui
│       └── input.tsx
├── domain
│   ├── constants
│   └── types
├── lib
│   └── utils.ts
├── package-lock.json
├── package.json
└── tsconfig.json

```

### 詳細

- appディレクトリ内のディレクトリの構成通りにルーティングされる。
    - 例えば、`app/example/page.tsx`は`http://localhost:3000/example` に対応する。
- /example というページでしか使わないコンポーネントは、`app/example/_components`に配置する。（要はスコープが重要）

詳しくは https://nextjs.org/docs/app/building-your-application/routing を参照。

- componentsディレクトリはアプリケーション全体で使いまわすコンポーネントを配置
    - common: プロジェクト全体で使いまわすコンポーネントを配置
    - ui: `npx shadcn@latest add ...`を実行するとここに追加される。 他のファイルでこれらをimportして使うが、ここは触らなくて良い。
- domainディレクトリはアプリケーション固有の情報を置いておく。
    - constants: アプリケーション全体で使用することができる定数をここに配置
    - types: アプリケーション全体で使用することができる型定義をtypesに配置（app/example/page.tsxでしか使用しない型はここに書かない。あくまでも全体で共有されるべき型を置くこと。）
- libディレクトリはアプリケーション全体で使用することができる便利な関数をおいていく。（基本的に触らなくて良い）