# CLIでのGitHub Copilot（31%の一部）

## 対応プラン
| 機能 | Free | Pro | Business | Enterprise |
|------|:----:|:---:|:--------:|:----------:|
| gh copilot explain | ○* | ○ | ○ | ○ |
| gh copilot suggest | ○* | ○ | ○ | ○ |
| Copilot CLI | ○* | ○ | ○ | ○ |

*Free: 月50メッセージまで

---

## レクチャー1: CLIでのCopilotインストール手順
**時間目安: 8分**

（内容を記述）

---

## レクチャー2: 一般的なCLIコマンドの紹介
**時間目安: 10分**

GitHub Copilot は IDE だけでなく、コマンドラインワークフローを合理化する強力なアシスタントとしても機能します。GitHub CLI と統合することで、未知のコマンドの説明を提供し、ニーズに基づいてコマンドを提案し、ユーザーに代わって実行することもできます。

### 1. コマンドの説明を取得（`gh copilot explain`）

特定のコマンドの機能がわからない場合、Copilot に説明を依頼できます。

```shell
gh copilot explain "sudo apt-get"
```

このコマンドは、指定されたコマンドの詳細な説明を提供します。

### 2. コマンド候補を取得（`gh copilot suggest`）

コマンドの構築に関するヘルプが必要な場合、実行したい内容に基づいてコマンドを提案するように Copilot に依頼できます。

```shell
gh copilot suggest "Undo the last commit"
```

Copilot は対話型セッションを開始して、要求を明確にし、最適なコマンドを提案します。

### 3. 推奨されるコマンドの実行

提案を受け取った後、`Execute command` オプションを選択できます。これにより、コマンドがクリップボードにコピーされます。また、`ghcs` エイリアスを構成した場合、Copilot に代わってコマンドを実行することもできます。

```shell
ghcs suggest "What command to see running docker containers"
```

### 4. 推奨されるコマンドの修正

GitHub Copilot CLI にコマンドを書き直したり修正したりして、期待に合わせて修正するには、フィードバックと共に「コマンドの修正」オプションを使用します。

---

## レクチャー3: CLIの設定オプション
**時間目安: 8分**

CLI で Copilot を最大限に活用するための設定オプションを紹介します。

### 1. エイリアスの構成

Copilot に代わってコマンドを直接実行する場合は、`ghcs` エイリアスを設定する必要があります。エイリアスを使用すると、コピーと貼り付けのコマンドを手動でバイパスでき、Copilot が手動で行います。

**bash の場合:**
```bash
echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc
```

**PowerShell の場合:**
```powershell
$GH_COPILOT_PROFILE = Join-Path -Path $(Split-Path -Path $PROFILE -Parent) -ChildPath "gh-copilot.ps1"
gh copilot alias -- pwsh | Out-File ( New-Item -Path $GH_COPILOT_PROFILE -Force )
echo ". `"$GH_COPILOT_PROFILE`"" >> $PROFILE
```

**Mac ターミナルまたは Zsh の場合:**
```zsh
echo 'eval "$(gh copilot alias -- zsh)"' >> ~/.zshrc
```

### 2. フィードバックメカニズム

Copilot は、提案を改善するためにユーザーのフィードバックを推奨します。Copilot がコマンドを提供した後に `Rate response` オプションを選択することで、提案の品質を評価できます。

### 3. 組織の設定

組織内で Copilot を使用している場合、特定の機能へのアクセスは組織のポリシーによって管理される可能性があります。管理者は CLI 内で Copilot の機能を有効または無効にすることができます。

特定のニーズに合わせて Copilot の機能を最適化できるように、さらにカスタマイズと詳細な構成については、[GitHub のドキュメント](https://docs.github.com/en/copilot)を参照してください。

### 4. データ処理

GitHub Copilot CLI ではプロンプトは保持されませんが、使用状況分析は保持されます。GitHub Copilot で使用状況データを保持して使用して製品を改善するかどうかを構成できます。

```shell
gh copilot config
```

コマンドを入力し、「Optional Usage Analytics」を選択し、オプトアウトする場合は「いいえ」を選択します。

---

## レクチャー4: 【確認テスト】CLIでのGitHub Copilot
**時間目安: 5分**

### 問題1
GitHub Copilot CLI で特定のコマンドの機能について説明を求める場合、どのコマンドを使用しますか？

A) `gh copilot suggest`
B) `gh copilot explain`
C) `gh copilot describe`
D) `gh copilot help`

<details>
<summary>解答</summary>

**正解: B) `gh copilot explain`**

`gh copilot explain` コマンドは、指定されたコマンドの詳細な説明を提供します。例えば `gh copilot explain "sudo apt-get"` と入力すると、そのコマンドの機能を説明してくれます。

</details>

---

### 問題2
GitHub Copilot CLI で、実行したい内容に基づいてコマンドを提案してもらう場合、どのコマンドを使用しますか？

A) `gh copilot explain`
B) `gh copilot recommend`
C) `gh copilot suggest`
D) `gh copilot generate`

<details>
<summary>解答</summary>

**正解: C) `gh copilot suggest`**

`gh copilot suggest` コマンドは、実行したい内容を自然言語で指定すると、対話型セッションを開始して要求を明確にし、最適なコマンドを提案します。

</details>

---

### 問題3
GitHub Copilot CLI で提案されたコマンドを直接実行できるようにするには、何を設定する必要がありますか？

A) 環境変数 `COPILOT_EXEC`
B) `ghcs` エイリアス
C) `copilot-cli` プラグイン
D) GitHub CLI の認証設定のみ

<details>
<summary>解答</summary>

**正解: B) `ghcs` エイリアス**

`ghcs` エイリアスを設定することで、提案されたコマンドを Copilot が直接実行できるようになります。設定しない場合、コマンドはクリップボードにコピーされるのみです。

</details>

---

### 問題4
bash シェルで `ghcs` エイリアスを構成するための正しいコマンドはどれですか？

A) `gh copilot alias --bash >> ~/.bashrc`
B) `echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc`
C) `gh copilot config --alias bash`
D) `export GHCS_ALIAS=bash`

<details>
<summary>解答</summary>

**正解: B) `echo 'eval "$(gh copilot alias -- bash)"' >> ~/.bashrc`**

このコマンドにより、bash シェルの設定ファイルに Copilot のエイリアス設定が追加され、`ghcs` コマンドが使用可能になります。

</details>

---

### 問題5
GitHub Copilot CLI のデータ処理について正しい記述はどれですか？

A) プロンプトと使用状況分析の両方が保持される
B) プロンプトは保持されないが、使用状況分析は保持される
C) プロンプトも使用状況分析も保持されない
D) プロンプトは保持されるが、使用状況分析は保持されない

<details>
<summary>解答</summary>

**正解: B) プロンプトは保持されないが、使用状況分析は保持される**

GitHub Copilot CLI ではプロンプトは保持されませんが、使用状況分析は保持されます。使用状況データの保持をオプトアウトするには `gh copilot config` コマンドを使用します。

</details>

---

### 問題6
GitHub Copilot CLI で提案されたコマンドが期待と異なる場合、どのオプションを選択して修正を依頼できますか？

A) `Regenerate command`
B) `Edit command`
C) `Revise command`（コマンドの修正）
D) `Retry command`

<details>
<summary>解答</summary>

**正解: C) `Revise command`（コマンドの修正）**

「コマンドの修正」オプションを選択し、フィードバックを提供することで、GitHub Copilot CLI にコマンドを書き直してもらい、期待に合わせて修正できます。

</details>

---

### 問題7（認定試験対策）
GitHub Copilot CLI を使用して特定のコマンドの説明を取得するために使用されるコマンドはどれですか?

A) `gh copilot suggest`
B) `gh copilot explain`
C) `gh copilot clarify`
D) `gh copilot の説明`

<details>
<summary>解答</summary>

**正解: B) `gh copilot explain`**

`gh copilot explain` コマンドを使用すると、特定のコマンドの機能について詳細な説明を取得できます。例えば、`gh copilot explain "sudo apt-get"` と入力すると、そのコマンドが何をするのかを説明してくれます。

一方、`gh copilot suggest` は実行したい内容に基づいてコマンドを提案してもらう場合に使用します。

</details>

---

**参照**: [コマンド ライン用の GitHub Copilot - Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/github-copilot-across-environments/5-git-hub-copilot-for-the-command-line)
