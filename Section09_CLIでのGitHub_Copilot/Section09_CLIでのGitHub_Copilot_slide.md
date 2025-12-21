---
marp: true
theme: custom-theme
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# CLIでのGitHub Copilot

---

# このセクションで学ぶこと

- GitHub Copilot CLI のインストール手順
- `gh copilot explain` でコマンドの説明を取得
- `gh copilot suggest` でコマンドを提案してもらう
- `ghcs` エイリアスの設定方法
- データ処理とプライバシーの設定

---

# 対応プラン

| 機能 | Free | Pro | Business | Enterprise |
|------|:----:|:---:|:--------:|:----------:|
| gh copilot explain | ○* | ○ | ○ | ○ |
| gh copilot suggest | ○* | ○ | ○ | ○ |
| Copilot CLI | ○* | ○ | ○ | ○ |

*Free: 月50メッセージまで

<span class="red">試験ポイント: Copilot CLI は全プランで利用可能（Freeは制限あり）</span>

---

<!-- _class: lecture -->
<!-- _paginate: false -->

# CLIでのCopilotインストール手順

---

# 前提条件

GitHub Copilot CLI を使用するには、以下が必要です

| 要件 | 説明 |
|------|------|
| **GitHub CLI** | `gh` コマンドがインストールされていること |
| **GitHub認証** | `gh auth login` で認証済みであること |
| **Copilotライセンス** | 有効なCopilotサブスクリプション |

---

# インストール手順

## 1. GitHub CLI拡張機能としてインストール

```shell
gh extension install github/gh-copilot
```

## 2. インストールの確認

```shell
gh copilot --help
```

## 3. 認証の確認

GitHub CLI で認証済みであれば、追加の認証は不要

---

<!-- _class: lecture -->
<!-- _paginate: false -->

# 一般的なCLIコマンドの紹介

---

# GitHub Copilot CLI の2つの主要コマンド

GitHub Copilot は IDE だけでなく、コマンドラインでも強力なアシスタントとして機能

| コマンド | 用途 |
|---------|------|
| `gh copilot explain` | 特定のコマンドの機能を説明 |
| `gh copilot suggest` | 実行したい内容に基づいてコマンドを提案 |

<span class="red">試験ポイント: explain = 説明を取得、suggest = 提案を取得</span>

---

# コマンドの説明を取得（`gh copilot explain`）

特定のコマンドの機能がわからない場合に使用

```shell
gh copilot explain "sudo apt-get"
```

## できること
- コマンドの詳細な説明を提供
- オプションやフラグの意味を解説
- 初心者にもわかりやすく説明

---

# コマンド候補を取得（`gh copilot suggest`）

コマンドの構築に関するヘルプが必要な場合に使用

```shell
gh copilot suggest "Undo the last commit"
```

## 動作
1. 対話型セッションを開始
2. 要求を明確にする質問をする場合もある
3. 最適なコマンドを提案

---

# 推奨されるコマンドの実行

提案を受け取った後の選択肢

| オプション | 説明 |
|-----------|------|
| **Execute command** | コマンドをクリップボードにコピー |
| **Revise command** | フィードバックを提供してコマンドを修正 |
| **Rate response** | 提案の品質を評価 |
| **Cancel** | 操作をキャンセル |

---

# ghcs エイリアスによる直接実行

<span class="red">`ghcs` エイリアスを設定すると、提案されたコマンドを直接実行可能</span>

```shell
ghcs suggest "What command to see running docker containers"
```

## メリット
- コピー＆ペーストの手順をスキップ
- よりスムーズなワークフロー
- Copilot がコマンドを直接実行


---

<!-- _class: lecture -->
<!-- _paginate: false -->

# CLIの設定オプション

---

# エイリアスの構成

`ghcs` エイリアスを設定して直接実行を有効化

## bash の場合

```bash
echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc
```

## Zsh（Mac）の場合

```zsh
echo 'eval "$(gh copilot alias -- zsh)"' >> ~/.zshrc
```

---

# PowerShell でのエイリアス設定

Windows PowerShell での設定方法

```powershell
$GH_COPILOT_PROFILE = Join-Path -Path $(Split-Path -Path $PROFILE -Parent) -ChildPath "gh-copilot.ps1"
gh copilot alias -- pwsh | Out-File ( New-Item -Path $GH_COPILOT_PROFILE -Force )
echo ". `"$GH_COPILOT_PROFILE`"" >> $PROFILE
```

設定後、ターミナルを再起動して `ghcs` コマンドが使えることを確認

---

# フィードバックメカニズム

Copilot の提案を改善するためのフィードバック機能

| アクション | 説明 |
|-----------|------|
| **Rate response** | 提案の品質を評価（良い/悪い） |
| **Revise command** | コマンドの修正を依頼 |

## 注意
- フィードバックは製品改善に活用される
- 積極的にフィードバックを提供することを推奨

---

# 組織の設定

組織内で Copilot を使用している場合

| 設定項目 | 説明 |
|---------|------|
| **機能の有効/無効** | 管理者がCLI機能を制御可能 |
| **ポリシー管理** | 組織のポリシーでアクセスを管理 |

詳細は [GitHub のドキュメント](https://docs.github.com/en/copilot) を参照

---

# データ処理の設定

GitHub Copilot CLI のデータ保持について

| データ種類 | 保持状況 |
|-----------|---------|
| **プロンプト** | 保持されない |
| **使用状況分析** | 保持される（オプトアウト可能） |

<span class="red">試験ポイント: プロンプトは保持されないが、使用状況分析は保持される</span>

---

# 使用状況分析のオプトアウト

```shell
gh copilot config
```

## 手順
1. 上記コマンドを入力
2. 「Optional Usage Analytics」を選択
3. オプトアウトする場合は「いいえ」を選択

---

# まとめ

## 主要コマンド
- `gh copilot explain` - コマンドの説明を取得
- `gh copilot suggest` - コマンドの提案を取得
- `gh copilot config` - 設定を変更

## エイリアス設定
- `ghcs` エイリアスで直接実行が可能
- シェルごとに設定方法が異なる

## データ処理
- プロンプトは保持されない
- 使用状況分析はオプトアウト可能

---

# 試験対策ポイント

| トピック | 重要ポイント |
|---------|-------------|
| コマンド説明 | `gh copilot explain` を使用 |
| コマンド提案 | `gh copilot suggest` を使用 |
| 直接実行 | `ghcs` エイリアスの設定が必要 |
| bash エイリアス | `echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc` |
| データ保持 | プロンプト×、使用状況分析○ |
| 設定変更 | `gh copilot config` コマンド |

---

# よくある誤答パターン

| 誤り | 正解 |
|------|------|
| `gh copilot describe` で説明 | `gh copilot explain` で説明 |
| `gh copilot recommend` で提案 | `gh copilot suggest` で提案 |
| プロンプトが保持される | プロンプトは保持されない |
| エイリアスなしで直接実行可能 | `ghcs` エイリアス設定が必要 |
| Copilot CLI は有料プランのみ | Free プランでも利用可能（制限あり） |