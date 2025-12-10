# セクション6: GitHub Copilot Chat（31%の一部）

## 参照リソース
- [GitHub Copilot の高度な機能 - Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/advanced-github-copilot/2-advanced-github-copilot-features)
- [GitHub Copilot の応用手法 - Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/advanced-github-copilot/4-applied-copilot-techniques)

---

## レクチャー1: Copilot Chatの概要と効果的なユースケース
**時間目安: 10分**

### GitHub Copilotの高度な機能

コードを操作するときは、ライブラリやフレームワークのドキュメントに加えて、プロジェクトのドキュメントを確認する必要があります。GitHub Copilot には、これらのタスクをより簡単かつ効率的にできる高度な機能がいくつかあります。

#### 基本（ゴーストテキスト）

GitHub Copilot が有効になっていると、提案が「ゴーストテキスト」として表示されます。

| 操作 | 説明 |
|------|------|
| Tab キー | ゴーストテキストを受け入れる |
| 無視 | 何もせずに入力を続けると提案は消える |
| コンテキスト | 開いているファイルを既定でコンテキストとして使用 |

#### GitHub Copilot とのチャット

Visual Studio Code では、左側のサイドバーにあるチャットアイコンをクリックして、専用のペインでチャットインターフェイスを開くことができます。このペインで、現在作業中のコードや、他のソフトウェア関連の疑問について質問できます。

#### インラインチャットの使用

専用のチャットペインに加えて、コードを離れることなく GitHub Copilot と対話できるインラインチャットも使用できます。

| OS | ショートカット |
|----|---------------|
| Windows | **Ctrl + i** |
| Mac | **Command + i** |

**利点**: コンテキストを切り替えるために別のウィンドウに移動する必要がなく、提案と対話はコードの近くで行われます。

---

## レクチャー2: スラッシュコマンド一覧と使い方
**時間目安: 12分**

### スラッシュコマンド

チャットウィンドウ内で、またはインラインチャットの使用時に、スラッシュコマンドを使用できます。これらのコマンドにより、GitHub Copilot は一般的な開発タスクをすばやく解決するために特定の意図を使用できます。

| コマンド | 用途 |
|---------|------|
| `/tests` | テストの記述に役立つ |
| `/docs` | ドキュメントの記述を目的としている |
| `/fix` | 指定したコードまたは選択したコードの問題を修正 |
| `/doc` | 指定したコードまたは選択したコードにコメントを追加 |
| `/explain` | コードに関する説明を取得 |
| `/generate` | 指定された質問に回答するコードを生成 |
| `/help` | Copilot チャットの使用方法に関するヘルプを取得 |
| `/optimize` | 選択したコードのランタイムを分析して改善 |

チャットペインまたはインラインチャットでスラッシュ（/）を入力すると、使用可能なすべてのスラッシュコマンドを含むドロップダウンメニューが表示されます。

スラッシュコマンドを使用すると、GitHub Copilotとの対話が簡単になり、長いプロンプトを記述せずに、より適切な応答を取得できます。

### エージェント

Visual Studio Code には、GitHub Copilot と対話できる「エージェント」という機能があります。これらのエージェントを使用すると、特定のコンテキストを使用して質問できます。

| エージェント | 説明 | 使用例 |
|------------|------|--------|
| `@terminal` | ターミナルと対話するのに役立つ | ターミナルコマンドに関する質問 |
| `@workspace` | ワークスペース全体を認識している | `@workspace how can I package this project?` |
| `@file` | 特定のファイルの内容に焦点を当てる | `@file この関数を main.py でリファクタリングできますか?` |
| `@directory` | 特定のディレクトリの内容を考慮 | `@directory utils ディレクトリ内のスクリプトを最適化する方法` |

エージェントを使用するには、質問の前にエージェント名を付けます。

---

## レクチャー3: 【ハンズオン】Chatを使ったコード説明・生成
**時間目安: 15分**

### 暗黙的なプロンプト

GitHub Copilot ガイダンスを取得するためのプロンプトでは、事前に作成されたプロンプトを暗黙的に提供する機能を利用できます。

**例: バグのあるPythonコードの修正**

```python
with open("file.txt", "r") as file:
    # Read the file and print the content
    contents = file.read
```

このコードにはバグがあります（`file.read`の後にかっこがない）。コードを選択し、インラインチャットを開いて（Windows: **Ctrl + I**、Mac: **Command + i**）`/fix`スラッシュコマンドを入力すると、Copilotがコードの修正を提案します。

### 選択的コンテキスト

GitHub Copilotは、作業中のコンテキストに基づいて提案をカスタマイズできます。ワークスペース全体またはターミナル出力に基づいて提案を提供するように依頼できます。

**Dockerfileの作成例**:
```text
@workspace help me create a Dockerfile to package this project but make sure you are using a Virtual Environment for Python.
```

**注意**: `@workspace`で具体的に指定することもできますが、GitHub Copilotはテキストエディターで開いているファイルを追加のコンテキストとして使用します。提案が探しているものと一致しない場合は、プロンプトの文言を変更して、より具体的に指示できます。

---

## レクチャー4: Copilot Chatのパフォーマンス向上テクニック
**時間目安: 10分**

（内容を記述）

---

## レクチャー5: Copilot Chatの制限事項とベストプラクティス
**時間目安: 10分**

（内容を記述）

---

## レクチャー6: フィードバックの共有方法
**時間目安: 5分**

（内容を記述）

---

## レクチャー7: 【確認テスト】Copilot Chat
**時間目安: 5分**

### 小テスト: GitHub Copilotの高度な機能

**Q1. GitHub Copilotのゴーストテキスト（提案）を受け入れるために使用するキーは？**
- A) Enter キー
- B) Tab キー
- C) Space キー
- D) Shift キー

<details>
<summary>解答</summary>
B) Tab キー - ゴーストテキストは Tab キーを押すことで受け入れることができます。
</details>

**Q2. Windowsでインラインチャットにアクセスするためのショートカットは？**
- A) Ctrl + c
- B) Ctrl + v
- C) Ctrl + i
- D) Ctrl + p

<details>
<summary>解答</summary>
C) Ctrl + i - Windowsでは Ctrl + i を使用してインラインチャットにアクセスします。
</details>

**Q3. Macでインラインチャットにアクセスするためのショートカットは？**
- A) Command + c
- B) Command + v
- C) Command + i
- D) Command + p

<details>
<summary>解答</summary>
C) Command + i - Macでは Command + i を使用してインラインチャットにアクセスします。
</details>

**Q4. Visual Studio Codeでチャットインターフェイスを開くにはどこをクリックしますか？**
- A) 右側のサイドバーのファイルアイコン
- B) 左側のサイドバーのチャットアイコン
- C) メニューバーの「表示」
- D) ステータスバーのCopilotアイコン

<details>
<summary>解答</summary>
B) 左側のサイドバーのチャットアイコン - 左側のサイドバーにあるチャットアイコンをクリックして、専用のペインでチャットインターフェイスを開きます。
</details>

**Q5. スラッシュコマンドを使用する主な利点は何ですか？**
- A) コードの実行速度が向上する
- B) より長いプロンプトを記述することなく、より適切な応答を取得できる
- C) ファイルを自動的に保存できる
- D) コードのコンパイルが高速化される

<details>
<summary>解答</summary>
B) より長いプロンプトを記述することなく、より適切な応答を取得できる - 特定のスラッシュコマンドを使用した質問の作成は、より長いプロンプトを記述することなく、より適切な応答を取得するために推奨される方法です。
</details>

**Q6. テストの記述を支援するために使用するスラッシュコマンドは？**
- A) /code
- B) /help
- C) /tests
- D) /run

<details>
<summary>解答</summary>
C) /tests - /tests スラッシュコマンドはテストの記述に役立ちます。
</details>

**Q7. ドキュメントの記述を支援するために使用するスラッシュコマンドは？**
- A) /docs
- B) /write
- C) /readme
- D) /comment

<details>
<summary>解答</summary>
A) /docs - /docs コマンドはドキュメントの記述を目的としています。
</details>

**Q8. @workspace エージェントの特徴として正しいものは？**
- A) ターミナルコマンドのみに対応する
- B) 現在のファイルのみを認識する
- C) ワークスペース全体を認識している
- D) 外部APIとの通信を行う

<details>
<summary>解答</summary>
C) ワークスペース全体を認識している - @workspace エージェントはワークスペース全体を認識しているため、プロジェクト全体に関する疑問について質問できます。
</details>

**Q9. @terminal エージェントの主な用途は何ですか？**
- A) ファイルの編集を支援する
- B) ターミナルと対話するのに役立つ
- C) コードのリファクタリングを行う
- D) テストを実行する

<details>
<summary>解答</summary>
B) ターミナルと対話するのに役立つ - @terminal エージェントは、GitHub Copilot とチャットしてターミナルと対話するのに役立ちます。
</details>

**Q10. エージェントを使用するための正しい構文は？**
- A) エージェント名の後に質問を記述する（例：workspace@ how can I...）
- B) 質問の前にエージェント名を付ける（例：@workspace how can I...）
- C) 質問の最後にエージェント名を記述する（例：how can I... @workspace）
- D) エージェント名をカッコで囲む（例：(workspace) how can I...）

<details>
<summary>解答</summary>
B) 質問の前にエージェント名を付ける（例：@workspace how can I...） - エージェントを使用するには、質問の前にエージェントを付けます。
</details>

---

### 小テスト: GitHub Copilotの応用手法

**Q1. Pythonコードにバグがある場合、インラインチャットでコードを修正するために使用するスラッシュコマンドは？**
- A) /doc
- B) /fix
- C) /explain
- D) /generate

<details>
<summary>解答</summary>
B) /fix - /fixスラッシュコマンドを使用すると、GitHub Copilotにコードの修正を依頼できます。
</details>

**Q2. 選択したコードのランタイムを分析して改善するために使用するスラッシュコマンドは？**
- A) /tests
- B) /generate
- C) /optimize
- D) /help

<details>
<summary>解答</summary>
C) /optimize - /optimizeスラッシュコマンドは選択したコードのランタイムを分析して改善します。
</details>

**Q3. スラッシュコマンドを使用する主な利点として正しいものは？**
- A) コードの実行速度が向上する
- B) 長いプロンプトを記述せずに、より適切な応答を取得できる
- C) 自動的にファイルが保存される
- D) コンパイルエラーが自動修正される

<details>
<summary>解答</summary>
B) 長いプロンプトを記述せずに、より適切な応答を取得できる - スラッシュコマンドにより、GitHub Copilotとの対話が簡単になり、事前に作成されたプロンプトを暗黙的に使用できます。
</details>

**Q4. プロジェクトをパッケージ化するDockerfileの作成を支援してもらいたい場合、使用すべきエージェントは？**
- A) @terminal
- B) @file
- C) @workspace
- D) @directory

<details>
<summary>解答</summary>
C) @workspace - @workspaceエージェントはワークスペース全体を認識しているため、プロジェクト全体に関する質問（Dockerfileの作成など）に適しています。
</details>

**Q5. 特定のファイル（例：main.py）の関数をリファクタリングしたい場合、最適なエージェントは？**
- A) @workspace
- B) @terminal
- C) @file
- D) @directory

<details>
<summary>解答</summary>
C) @file - @fileエージェントは特定のファイルの内容に焦点を当てるため、特定ファイルのリファクタリングに適しています。
</details>

**Q6. utilsディレクトリ内のスクリプトを最適化したい場合、使用すべきエージェントは？**
- A) @workspace
- B) @terminal
- C) @file
- D) @directory

<details>
<summary>解答</summary>
D) @directory - @directoryエージェントは特定のディレクトリの内容を考慮するため、ディレクトリ内のスクリプト最適化に適しています。
</details>

**Q7. ターミナルに表示されているエラーメッセージの修正方法を知りたい場合、使用すべきエージェントは？**
- A) @workspace
- B) @terminal
- C) @file
- D) @directory

<details>
<summary>解答</summary>
B) @terminal - @terminalエージェントはターミナル出力に基づいて提案を提供するため、ターミナルエラーの修正に適しています。
</details>

**Q8. @workspaceエージェントを使用しない場合、GitHub Copilotはどのようなコンテキストを使用しますか？**
- A) インターネット上の公開コードのみ
- B) テキストエディターで開いているファイル
- C) リポジトリ全体のコード
- D) 過去の会話履歴のみ

<details>
<summary>解答</summary>
B) テキストエディターで開いているファイル - @workspaceで具体的に指定しなくても、GitHub Copilotはテキストエディターで開いているファイルを追加のコンテキストとして使用します。
</details>

**Q9. 提案が期待通りでない場合の対処法として正しいものは？**
- A) GitHub Copilotを再インストールする
- B) プロンプトの文言を変更して、より具体的に指示する
- C) 別のエディターに切り替える
- D) ネットワーク接続を確認する

<details>
<summary>解答</summary>
B) プロンプトの文言を変更して、より具体的に指示する - 提案が探しているものと一致しない場合は、プロンプトの文言を変更してより具体的に指示できます。
</details>

**Q10. インラインチャットとスラッシュコマンドを組み合わせることの利点は？**
- A) コードの自動デプロイが可能になる
- B) ユーザーと作業中のコードにとって最適な方法を選択できる
- C) コードのバージョン管理が自動化される
- D) テストが自動実行される

<details>
<summary>解答</summary>
B) ユーザーと作業中のコードにとって最適な方法を選択できる - スラッシュコマンドなどの機能とインラインチャットを組み合わせることで、ユーザーと作業中のコードにとって最適な方法を選択できます。
</details>

---

### 小テスト: Microsoft Learn 認定試験形式

**Q1. GitHub Copilot のゴースト テキストとは何ですか?**
- A) GitHub Copilot のゴースト テキストは、入力時にテキスト エディターに表示される候補です。
- B) GitHub Copilot のゴースト テキストは、入力時に提案を提供するために使用されるオプションです。
- C) GitHub Copilot のゴースト テキストには、コードまたはドキュメント内でのプロンプトと自然言語の質問の使用が関連します。

<details>
<summary>解答</summary>
A) GitHub Copilot のゴースト テキストは、入力時にテキスト エディターに表示される候補です。
</details>

**Q2. GitHub Copilot のインライン チャットにアクセスするにはどうすればよいですか?**
- A) Visual Studio Code の左側のサイドバーにあるチャット アイコンをクリックして、インライン チャットにアクセスします。
- B) Windows では Ctrl + I、Mac では Command + I を使用してインライン チャットを開きます。
- C) Windows の Alt + I または Mac の Option + I を使用してインライン チャットにアクセスします。

<details>
<summary>解答</summary>
B) Windows では Ctrl + I、Mac では Command + I を使用してインライン チャットを開きます。
</details>

**Q3. GitHub Copilot で使用されるスラッシュ コマンドとは何ですか?**
- A) スラッシュ コマンドは、ベスト プラクティスに従ってコードベースを書式設定するために使用されます。
- B) スラッシュ コマンドは、プロジェクト内のコードをデバッグし、セキュリティの脆弱性を検出するために使用されます。
- C) スラッシュ コマンドは、チャットまたはインライン ウィンドウ内の一般的な開発タスクをすばやく解決するためのショートカットです。

<details>
<summary>解答</summary>
C) スラッシュ コマンドは、チャットまたはインライン ウィンドウ内の一般的な開発タスクをすばやく解決するためのショートカットです。
</details>

**Q4. GitHub Copilot と対話するときに、"@terminal" や "@workspace" などのエージェントを使用する利点は何ですか?**
- A) Visual Studio Code のエージェントは、特定のコンテキスト内で質問するのに役立ちます。これにより、GitHub Copilot からのより正確で関連性の高い回答を得ることができます。
- B) エージェントは、読みやすさを向上させるために、Visual Studio Code 内のベスト プラクティスに基づいて一貫したコード形式を適用するのに役立ちます。
- C) エージェントは、Visual Studio Code プロジェクト内の脆弱性と侵入を検出するための追加のセキュリティ機能を提供します。

<details>
<summary>解答</summary>
A) Visual Studio Code のエージェントは、特定のコンテキスト内で質問するのに役立ちます。これにより、GitHub Copilot からのより正確で関連性の高い回答を得ることができます。
</details>

**Q5. GitHub Copilot でコードの問題を修正するためにインライン チャットでスラッシュ コマンドが含まれる暗黙的なプロンプトを使用する利点は何ですか?**
- A) 暗黙的なプロンプトは、読みやすさを向上させるために、Visual Studio Code プロジェクト内のベスト プラクティスに基づいて一貫した名前付け規則と構文を適用するのに役立ちます。
- B) 暗黙的なプロンプトは、より長いプロンプトを書かずに GitHub Copilot からより良い応答を得るのに役立ち、コードの問題への対処と修正が容易になります。
- C) 暗黙的なプロンプトは、セキュリティの脆弱性と潜在的な悪意のあるアクティビティを Visual Studio Code プロジェクト内で検出し、安全性を高めるのに役立ちます。

<details>
<summary>解答</summary>
B) 暗黙的なプロンプトは、より長いプロンプトを書かずに GitHub Copilot からより良い応答を得るのに役立ち、コードの問題への対処と修正が容易になります。
</details>
