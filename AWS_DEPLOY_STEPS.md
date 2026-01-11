# AWS Amplifyへのデプロイ手順（即座に実行可能）

## ✅ 準備完了状況
- ✅ GitHubへのプッシュ完了（最新コミット: 4d91809）
- ✅ amplify.yml設定ファイル作成済み
- ✅ ビルド設定完了
- ✅ 環境変数設定（NEXT_PUBLIC_SITE_URL）完了

## 🚀 デプロイ方法

### 方法1: AWS Amplifyコンソールでデプロイ（推奨・最速）

#### ステップ1: AWS Amplifyコンソールにアクセス
1. ブラウザで以下にアクセス:
   ```
   https://console.aws.amazon.com/amplify/
   ```

#### ステップ2A: 既存のアプリがある場合
1. アプリ一覧から該当アプリを選択
2. 左メニューから「Deployments」をクリック
3. 「Redeploy this version」ボタンをクリック
4. または、最新のコミット（4d91809）が表示されている場合、自動的にデプロイが開始されている可能性があります

#### ステップ2B: 新しいアプリを作成する場合
1. 「New app」→「Host web app」をクリック
2. 「GitHub」を選択
3. 「Continue」をクリックしてGitHub認証
4. リポジトリを選択:
   - リポジトリ: `k0haku031400-glitch/ai-revolution-homepage`
   - ブランチ: `main`
5. ビルド設定を確認:
   - 「amplify.yml already exists」と表示されることを確認
   - または、以下が自動検出されていることを確認:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - echo "NEXT_PUBLIC_SITE_URL=https://ai-revo.co.jp" >> .env.production
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
     ```
6. 「Save and deploy」をクリック
7. ビルドが開始されます（5-10分程度）

#### ステップ3: 環境変数の確認（オプション）
1. 左メニューから「Environment variables」を選択
2. 以下の環境変数が設定されているか確認:
   ```
   NEXT_PUBLIC_SITE_URL = https://ai-revo.co.jp
   ```
3. 設定されていない場合は追加（ただし、amplify.ymlで自動設定されるため必須ではありません）

#### ステップ4: デプロイ完了を待つ
1. 「Deployments」タブでビルド状況を確認
2. ステータスが「Success」になるまで待機
3. デプロイ完了後、URLが表示されます（例: `https://main.xxxxx.amplifyapp.com`）

### 方法2: AWS CLIを使用（オプション）

#### AWS CLIのインストール（Homebrewを使用）
```bash
brew install awscli
```

#### AWS認証情報の設定
```bash
aws configure
```
- AWS Access Key ID: [入力]
- AWS Secret Access Key: [入力]
- Default region: ap-northeast-1 (東京リージョン)
- Default output format: json

#### デプロイの実行
既存のAWS AmplifyアプリIDが必要です:
```bash
# アプリ一覧を取得
aws amplify list-apps

# デプロイを開始（アプリIDとブランチ名を指定）
aws amplify start-job \
  --app-id <YOUR_APP_ID> \
  --branch-name main \
  --job-type RELEASE
```

## 📋 デプロイ後の確認

### 1. 本番サイトにアクセス
- AWS Amplifyコンソールで表示されるURLにアクセス
- または、カスタムドメイン: `https://ai-revo.co.jp`

### 2. サイトマップとrobots.txtの確認
```bash
# サイトマップ
curl https://ai-revo.co.jp/sitemap.xml

# robots.txt
curl https://ai-revo.co.jp/robots.txt
```

### 3. ビルドログの確認
- AWS Amplifyコンソール → 「Deployments」→ 該当ビルド → 「View logs」
- エラーがないか確認

### 4. ページの動作確認
- ホームページが正しく表示されるか
- TikTokアイコンが正しく表示されるか
- すべてのリンクが正常に動作するか

## 🔧 トラブルシューティング

### ビルドが失敗する場合
1. **ビルドログを確認**
   - AWS Amplifyコンソールでビルドログを確認
   - エラーメッセージを特定

2. **ローカルでビルド確認**
   ```bash
   npm run clean:build
   ```
   - ローカルでエラーが出る場合は修正

3. **環境変数の確認**
   - `NEXT_PUBLIC_SITE_URL`が正しく設定されているか確認
   - amplify.ymlの設定を確認

### サイトが表示されない場合
1. **カスタムドメインの設定確認**
   - AWS Amplifyコンソール → 「Domain management」
   - ドメインが正しく設定されているか確認

2. **CloudFrontのキャッシュ**
   - 数分待ってから再度アクセス
   - または、ブラウザのキャッシュをクリア

## 📝 重要な注意事項

1. **初回デプロイ**: 5-10分程度かかります
2. **再デプロイ**: 通常3-5分程度
3. **環境変数**: amplify.ymlで自動設定されるため、コンソールでの設定は任意です
4. **カスタムドメイン**: 別途設定が必要な場合があります

## 🎯 次のステップ

デプロイが完了したら:
1. Google Search Consoleにサイトマップを再送信
2. サイトの動作を確認
3. パフォーマンステストを実行

---

**現在の状況**: すべての準備が完了しています。AWS Amplifyコンソールでデプロイを実行してください。

