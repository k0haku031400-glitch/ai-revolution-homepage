# AI Revolution Website

AI Revolution 株式会社の公式ホームページです。

## 🚀 技術構成

- **Framework**: Next.js 16.0.5 (App Router)
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 3.4.3
- **Runtime**: React 19.2.0

## 📋 機能

- レスポンシブデザイン対応
- お問い合わせフォーム（API Route）
- スムーズスクロールナビゲーション
- モダンなUI/UX

## 🛠️ セットアップ

### 必要な環境

- Node.js 18.0.0 以上
- npm または yarn

### インストール

```bash
# 依存パッケージのインストール
npm install
```

## 🏃 開発コマンド

```bash
# 開発サーバーを起動（ホットリロード有効）
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーを起動（ビルド後、自動的にポート3000をクリア）
npm run start

# ポート3000を使用中のプロセスを終了してから起動（明示的に）
npm run start:clean

# ポート3000を使用中のプロセスを終了
npm run kill:3000

# TypeScriptの型チェック
npm run type-check

# ビルドキャッシュをクリア
npm run clean

# クリーンビルド（キャッシュクリア + ビルド）
npm run clean:build
```

開発サーバーは `http://localhost:3000` で起動します。

### ⚠️ よくあるエラーと対処法

- **`EADDRINUSE: address already in use :::3000`**
  - 解決: `npm run start` は自動的にポートをクリアします。手動でクリアする場合は `npm run kill:3000` を実行

- **`Missing script: "export"`**
  - 原因: 存在しないスクリプトを実行しようとした
  - 解決: `npm run` で利用可能なスクリプトを確認

- **`EINVALIDTAGNAME`**
  - 原因: 無効なパッケージ名を指定
  - 解決: 正しいパッケージ名を使用

## 📁 プロジェクト構造

```
├── app/
│   ├── api/              # API Routes
│   │   └── contact/      # お問い合わせAPI
│   ├── components/       # Reactコンポーネント
│   │   └── Header.tsx   # ヘッダーコンポーネント
│   ├── layout.tsx       # ルートレイアウト
│   └── page.tsx         # トップページ
├── public/              # 静的ファイル（画像等）
├── styles/              # グローバルスタイル
└── tailwind.config.ts   # Tailwind設定
```

## 🚢 デプロイ

### Vercel へのデプロイ

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリと連携
3. プロジェクトをインポート
4. 自動的にビルド・デプロイが実行されます

### 環境変数

必要に応じて、Vercelのダッシュボードで環境変数を設定してください。

## 📝 ライセンス

MIT License

## 👥 開発者

AI Revolution 株式会社

---

© 2025 AI Revolution 株式会社. All Rights Reserved.

# ai-revo-website
