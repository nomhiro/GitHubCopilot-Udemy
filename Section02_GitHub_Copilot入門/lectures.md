# Section02: GitHub Copilot入門

## 参照リソース
- [GitHub Copilot の概要 - Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-github-copilot/)
- [GitHub Copilot、AI ペア プログラマ](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer)
- [Copilotとの対話](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-github-copilot/3-interacting-with-copilot)
- [設定、構成、トラブルシューティング](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot)

---

## Lecture 1: GitHub Copilotとは

### 学習目標
- GitHub Copilotの基本概念を理解する
- AIペアプログラマとしての役割を説明できる
- GitHub Copilotの効果と主要機能を把握する

### 内容

#### GitHub Copilotの概要
- **定義**: OpenAIと共同開発されたAIペアプログラマサービス
- **技術基盤**: OpenAI Codexシステム（GPT-3より優れたコード生成能力）
- **機能**: オートコンプリート形式でリアルタイムにコード候補を提案
- **対応言語**: Python、JavaScript、TypeScript、Ruby、Go、C#、C++など多数

#### 対応IDE
- Visual Studio Code
- Visual Studio
- Vim / Neovim
- JetBrains スイート（IntelliJ、PyCharm等）

#### GitHub Copilotの効果（調査データ）

| 指標 | 数値 |
|------|------|
| AIによって記述された新しいコードの割合 | **46%** |
| 開発者の生産性向上 | **55%** |
| 満足のいく作業に集中できると感じた開発者 | **74%** |

#### GitHub Copilotの主要機能

1. **コード補完**: インラインでリアルタイムにコード提案
2. **チャット用Copilot**: ChatGPTライクなインターフェイスでコード分析・テスト生成
3. **Pull Request用Copilot**: PR説明の自動生成（GPT-4モデル使用）
4. **CLI用Copilot**: ターミナルでのコマンド構成支援

#### AIペアプログラマとは
- 開発者と協働してコーディングを支援
- コンテキストを理解して適切な提案を生成
- 単なるオートコンプリートではなく、複数行のコード提案が可能

---

## Lecture 2: GitHub Copilotの起動方法

### 学習目標
- GitHub Copilotをトリガーするさまざまな方法を理解する
- 提案の操作方法をマスターする

### 内容

#### トリガー方法
1. **自動トリガー**: コードを入力すると自動的に提案が表示される（淡色表示）
2. **手動トリガー**: キーボードショートカットで明示的に起動
3. **コメント駆動**: 自然言語のコメントを書いてコードを生成

#### コマンドパレットからの起動
- `Ctrl+Shift+P`(Windows/Linux) / `Cmd+Shift+P`(Mac)でコマンドパレットを開く
- 「Copilot」と入力して使用可能なコマンドを表示

#### 提案の操作

| 操作 | Windows/Linux | Mac |
|------|---------------|-----|
| 提案を受け入れる | `Tab` または `→` | `Tab` または `→` |
| 提案を拒否する | `Esc` | `Esc` |
| 次の提案を表示 | `Alt + ]` | `Option + ]` |
| 前の提案を表示 | `Alt + [` | `Option + [` |

- 電球アイコンをクリックして複数の提案を表示することも可能

---

## Lecture 3: Copilotとの対話方法

### 学習目標
- 効果的にCopilotと対話する方法を習得する
- インラインチャットとスラッシュコマンドを使いこなす
- Copilotの学習特性を理解する

### 内容

#### 効果的な対話のポイント
- **明確なコンテキスト**: 変数名や関数名を意味のあるものにする
- **コメントの活用**: やりたいことを自然言語で説明する
- **段階的なアプローチ**: 複雑な処理は小さなステップに分ける

#### コメント→コード変換

コメントを書くだけでコードを生成できる：

```python
# Function to reverse a string
def reverse_string(s):
    return s[::-1]
```

#### Copilotチャット
- 自然言語で対話型コミュニケーション
- 質問やコードスニペットをリクエスト可能
- 新しい概念の探索や構文サポートに最適

#### インラインチャット
- **起動**: `Ctrl+I`(Windows/Linux) / `Cmd+I`(Mac)
- コードエディター内でコンテキスト固有の会話が可能

#### スラッシュコマンド

| コマンド | 説明 |
|---------|------|
| `/explain` | 選択したコードの説明 |
| `/suggest` | コードの提案 |
| `/tests` | 単体テストの生成 |
| `/comment` | コメントからコードを生成 |

#### 説明機能
- コードを選択 → 右クリック → 「Copilot: Explain This」
- 既存コードの理解に有用

#### 自動化されたテスト生成

関数を選択してテストを自動生成できる：

```python
def add(a, b):
    return a + b

# Copilotが生成するテスト例
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

#### Copilotの学習特性
- コンテキストから学習する
- コードの適切な構造化とコメント記載が精度を向上させる
- 相互作用を重ねるほどコーディングスタイルに適応する

---

## Lecture 4: 設定と構成

### 学習目標
- GitHub Copilotの設定方法を理解する
- VS Codeでの拡張機能インストール手順を習得する
- 組織での管理方法を把握する

### 内容

#### GitHub Copilotへのサインアップ
1. GitHubのプロフィール写真を選択 → **設定**
2. 左メニューの「コード、計画、自動化」から **Copilot** を選択
3. 無料試用版またはサブスクリプションを設定

#### VS Codeでの拡張機能インストール
1. Visual Studio Marketplaceで「GitHub Copilot」を検索
2. **インストール** を選択
3. VS Codeが開いたら拡張機能タブで **インストール** を選択
4. 初回はGitHubにサインインが必要

#### 有効/無効の切り替え
- VS Code下部の状態アイコンをクリック
- **有効にする** または **無効にする** を選択
- グローバルまたは特定の言語に対して無効化可能

#### インライン候補の設定
1. **ファイル** → **ユーザー設定** → **設定**
2. **拡張機能** → **GitHub Copilot** を選択
3. 「エディター: オートコンプリートを有効にする」で制御

#### 組織での管理
- Organization/Enterpriseでのポリシー設定
- ユーザーへのライセンス割り当て
- コンテンツ除外の設定

---

## Lecture 5: トラブルシューティング

### 学習目標
- 一般的な問題の解決方法を理解する
- ログファイルと診断情報の確認方法を習得する

### 内容

#### よくある問題と解決方法

| 問題 | 解決方法 |
|------|----------|
| 提案が表示されない | 拡張機能の有効化を確認、ネットワーク接続を確認 |
| 認証エラー | GitHubアカウントの再認証 |
| 遅延が発生 | ネットワーク状況の確認、プロキシ設定の見直し |

#### 一般的な問題の原因
- ネットワーク制限
- ファイアウォール設定
- プロキシ接続の問題

#### ログファイルの確認
コマンドパレット（`Ctrl+Shift+P` / `Cmd+Shift+P`）で以下を実行：
- **「開発者: ログ ファイルを開く」**
- **「開発者: 拡張機能のログ フォルダーを開く」**

#### Electronログの表示
- **ヘルプ** → **開発者ツールの切り替え**

#### 診断情報の収集
1. コマンドパレットを開く
2. 「Diagnostics」と入力
3. **「GitHub Copilot: 診断情報の収集」** を選択

#### ステータスの確認
- VS Code下部のGitHub Copilotステータスアイコンを確認
- アイコンの色や状態で接続状況を判断

---

## まとめ

このセクションでは以下を学習しました：

1. **GitHub Copilotの基本**: AIペアプログラマとしての役割と機能
2. **起動方法**: 自動・手動・コメント駆動のトリガー方法
3. **対話方法**: 効果的なコンテキスト提供とインラインチャット
4. **設定**: 個人および組織での構成方法
5. **トラブルシューティング**: 一般的な問題の解決方法

---

## 確認クイズ

### 問題1
GitHub Copilot の技術基盤となっているAIシステムは何ですか？

- GPT-4
- OpenAI Codex ✓
- ChatGPT
- DALL-E

---

### 問題2
GitHub Copilot の提案を受け入れるためのキーボードショートカットは何ですか？

- `Ctrl + Enter`
- `Alt + Enter`
- `Tab` または `→` ✓
- `Shift + Tab`

---

### 問題3
GitHub Copilot の調査データによると、開発者の生産性向上は何%ですか？

- 46%
- 55% ✓
- 74%
- 85%

---

### 問題4
VS Code でインラインチャットを起動するショートカットは何ですか？

- `Ctrl + Shift + P` (Windows/Linux) / `Cmd + Shift + P` (Mac)
- `Ctrl + I` (Windows/Linux) / `Cmd + I` (Mac) ✓
- `Alt + ]` (Windows/Linux) / `Option + ]` (Mac)
- `Ctrl + Space` (Windows/Linux) / `Cmd + Space` (Mac)

---

### 問題5
GitHub Copilot Chat で単体テストを生成するためのスラッシュコマンドは何ですか？

- `/explain`
- `/suggest`
- `/tests` ✓
- `/comment`

---

### 問題6
GitHub Copilot をトリガーする方法として**正しくない**ものはどれですか？

- コードを入力すると自動的に提案が表示される
- 自然言語のコメントを書いてコードを生成する
- コマンドパレットから明示的に起動する
- ファイルを保存すると自動的にコード全体が最適化される ✓

---

### 問題7
GitHub Copilot の診断情報を収集するには、コマンドパレットで何を実行しますか？

- 「開発者: ログ ファイルを開く」
- 「GitHub Copilot: 診断情報の収集」 ✓
- 「ヘルプ: 開発者ツールの切り替え」
- 「GitHub Copilot: 再起動」

---

### 問題8
GitHub Copilot の提案が表示されない一般的な原因として**正しくない**ものはどれですか？

- ネットワーク制限
- ファイアウォール設定
- プロキシ接続の問題
- 使用しているプログラミング言語がサポートされていない ✓

---

### 問題9
GitHub Copilot の主要機能に**含まれない**ものはどれですか？

- コード補完（インラインでリアルタイムにコード提案）
- チャット用Copilot（ChatGPTライクなインターフェイス）
- Pull Request用Copilot（PR説明の自動生成）
- 自動デプロイ機能（コードを本番環境に自動展開） ✓

---

### 問題10
GitHub Copilot の効果的な活用方法として**正しい**ものはどれですか？

- 変数名や関数名は短い方がCopilotの精度が上がる
- コメントを書かずにコードだけを入力した方が良い提案が得られる
- 複雑な処理は小さなステップに分けて段階的にアプローチする ✓
- Copilotの提案は常に正しいため、レビューせずにそのまま使用する
