↓# AWS環境へのデプロイ手順

## 📋 現在のプロジェクト構成

- **フレームワーク**: Next.js 16.0.5 (App Router)
- **Gitリポジトリ**: https://github.com/k0haku031400-glitch/ai-revolution-homepage.git
- **デプロイ先**: AWS環境（推測: AWS Amplify）

## ✅ ローカルでの確認手順

### 1. ビルドの実行と確認

```bash
# クリーンビルドを実行
npm run clean:build

# または通常のビルド
npm run build
```

### 2. 生成されたsitemap.xmlの内容を確認

Next.jsの開発サーバーを起動して確認：

```bash
# ビルド後、開発サーバーを起動
npm run start

# 別のターミナルで以下を実行してsitemap.xmlの内容を確認
curl http://localhost:3000/sitemap.xml

# またはブラウザで以下にアクセス
# http://localhost:3000/sitemap.xml
```

**期待される出力例：**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ai-revo.co.jp</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. robots.txtの内容を確認

```bash
curl http://localhost:3000/robots.txt
```

**期待される出力：**
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://ai-revo.co.jp/sitemap.xml
```

## 🚀 AWS Amplifyへのデプロイ手順

### 方法1: Git Pushによる自動デプロイ（推奨）

AWS AmplifyがGitHubリポジトリと連携している場合：

1. **変更をコミット**
   ```bash
   git add app/sitemap.ts app/robots.ts app/layout.tsx .env.local
   git commit -m "Fix: Update sitemap and robots.txt for Google Search Console"
   ```

2. **GitHubにプッシュ**
   ```bash
   git push origin main
   # または
   git push origin master
   ```

3. **AWS Amplifyの自動ビルドを確認**
   - AWS Amplifyコンソールにアクセス
   - ビルド履歴で新しいビルドが開始されていることを確認
   - ビルドが完了するまで待機（通常5-10分）

### 方法2: 手動でビルドをトリガー

AWS Amplifyコンソールから：

1. AWS Amplifyコンソールにログイン
2. 該当するアプリを選択
3. 「Redeploy this version」をクリック
4. または「Actions」→「Redeploy this version」を選択

### 方法3: AWS CLIを使用したデプロイ

```bash
# AWS CLIがインストールされている場合
aws amplify start-job \
  --app-id <YOUR_APP_ID> \
  --branch-name main \
  --job-type RELEASE
```

## ⚙️ AWS Amplifyの環境変数設定

**重要**: 本番環境で環境変数を設定する必要があります。

1. **AWS Amplifyコンソールで環境変数を設定**
   - AWS Amplifyコンソール → 該当アプリ → 「Environment variables」
   - 以下の環境変数を追加：
     ```
     NEXT_PUBLIC_SITE_URL = https://ai-revo.co.jp
     ```

2. **または amplify.yml で設定**（ファイルが存在する場合）
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - echo "NEXT_PUBLIC_SITE_URL=https://ai-revo.co.jp" >> .env.production
       build:
         commands:
           - npm run build
   ```

## 📝 デプロイ後の確認手順

### 1. 本番環境のsitemap.xmlを確認

```bash
curl https://ai-revo.co.jp/sitemap.xml
```

### 2. 本番環境のrobots.txtを確認

```bash
curl https://ai-revo.co.jp/robots.txt
```

### 3. Google Search Consoleで再送信

1. Google Search Consoleにログイン
2. 「サイトマップ」セクションに移動
3. 既存のサイトマップを削除（エラーが出ている場合）
4. 新しいサイトマップを追加: `https://ai-revo.co.jp/sitemap.xml`
5. 数分待ってから「取得」ボタンをクリックして確認

## 🔍 トラブルシューティング

### sitemap.xmlがyour-domain.comになっている場合

1. **環境変数の確認**
   ```bash
   # ローカルで確認
   echo $NEXT_PUBLIC_SITE_URL
   ```

2. **AWS Amplifyの環境変数を再確認**
   - コンソールで `NEXT_PUBLIC_SITE_URL` が正しく設定されているか確認
   - 値が `https://ai-revo.co.jp` になっているか確認

3. **ビルドログの確認**
   - AWS Amplifyコンソール → ビルド履歴 → 該当ビルドのログを確認
   - 環境変数が正しく読み込まれているか確認

### ビルドが失敗する場合

1. **TypeScriptの型チェック**
   ```bash
   npm run type-check
   ```

2. **ローカルでビルドを再実行**
   ```bash
   npm run clean:build
   ```

3. **エラーログを確認**
   - AWS Amplifyコンソールのビルドログを確認
   - エラーメッセージに基づいて修正

## 📌 重要な注意事項

1. **`.env.local`はGitにコミットしない**
   - `.gitignore`に既に含まれているため問題ありません
   - 本番環境ではAWS Amplifyの環境変数設定を使用

2. **環境変数の命名規則**
   - `NEXT_PUBLIC_` プレフィックスが必要（クライアント側で使用するため）

3. **ビルド時間**
   - 初回ビルドは5-10分かかる場合があります
   - 再ビルドは通常3-5分程度

4. **キャッシュのクリア**
   - 問題が解決しない場合は、AWS Amplifyでキャッシュをクリアして再ビルド

