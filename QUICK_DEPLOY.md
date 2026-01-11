# 🚀 AWS Amplifyへのクイックデプロイ手順

## 方法1: AWS Amplifyコンソールでデプロイ（推奨・最速）

### ステップ1: AWS Amplifyコンソールにアクセス
ブラウザで以下を開いてください：
👉 **https://console.aws.amazon.com/amplify/**

### ステップ2: 既存のアプリがある場合
1. アプリ一覧から該当アプリをクリック
2. 左メニューの「Deployments」をクリック
3. 「Redeploy this version」ボタンをクリック
4. または、最新のコミット（4d91809）が表示されていれば、自動的にデプロイが開始されている可能性があります

### ステップ3: 新しいアプリを作成する場合
1. 「New app」→「Host web app」をクリック
2. 「GitHub」を選択して「Continue」
3. GitHub認証を完了
4. リポジトリを選択：
   - **Repository**: `k0haku031400-glitch/ai-revolution-homepage`
   - **Branch**: `main`
5. ビルド設定を確認：
   - 「amplify.yml already exists」と表示されることを確認
   - 設定は自動検出されます
6. 「Save and deploy」をクリック
7. ビルド完了を待つ（5-10分程度）

### ステップ4: デプロイ完了
- 「Deployments」タブでビルド状況を確認
- ステータスが「Success」になったら完了
- 表示されたURLまたは `https://ai-revo.co.jp` にアクセス

---

## 方法2: AWS CLIでデプロイ（オプション）

### AWS認証情報の設定
ターミナルで以下を実行：

```bash
aws configure
```

以下の情報を入力してください：
- **AWS Access Key ID**: [AWSコンソールから取得]
- **AWS Secret Access Key**: [AWSコンソールから取得]
- **Default region**: `ap-northeast-1` (東京)
- **Default output format**: `json`

### 既存のアプリがある場合
```bash
# アプリ一覧を取得
aws amplify list-apps

# アプリIDを確認後、デプロイを開始
aws amplify start-job \
  --app-id <YOUR_APP_ID> \
  --branch-name main \
  --job-type RELEASE
```

---

## 📋 現在の準備状況

✅ **完了済み:**
- GitHubへのプッシュ完了（最新コミット: 4d91809）
- amplify.yml設定ファイル作成済み
- ビルド設定完了
- 環境変数設定完了（NEXT_PUBLIC_SITE_URL）
- AWS CLIインストール済み

⚠️ **必要な作業:**
- AWS Amplifyコンソールでのデプロイ実行
- または、AWS認証情報の設定（AWS CLI使用の場合）

---

## 🎯 推奨アクション

**最も簡単な方法**: AWS Amplifyコンソール（方法1）を使用してください。
- ブラウザで https://console.aws.amazon.com/amplify/ にアクセス
- 既存アプリがあれば「Redeploy this version」をクリック
- 新規アプリの場合は「New app」→「Host web app」から作成

デプロイは5-10分程度で完了します。

