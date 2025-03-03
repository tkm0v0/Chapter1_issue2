# 環境構築時(過去)のREADME

# Chapter1_環境構築

## MacのReact環境構築
- nvm と HomeBrewはインストール済み
```
@MacBook-Pro Chapter1_task1 % node -v
v18.12.1
@MacBook-Pro Chapter1_task1 % brew -v
Homebrew 4.0.11
Homebrew/homebrew-core (git revision e11f5a6425c; last commit 2023-03-30)
@MacBook-Pro Chapter1_task1 % nodenv -v
zsh: command not found: nodenv
```
- AI にNodenvのインストールが必要か聞いてみる
```自分
nodenvはnvmで変えがききますか??
```
```クロード
いいえ、nodenvとnvmは別々のツールで、直接の互換性はありません。

nvmはNode Version Managerの略で、Node.jsのバージョン管理ツールの一つです。nvmを使うと、システム全体でNode.jsのバージョンを切り替えることができます。

一方、nodenvはプロジェクトごとにNode.jsのバージョンを切り替えるためのツールです。nodenvを使う場合、プロジェクトのルートディレクトリに.node-versionファイルを置き、そこにプロジェクトで使用するNode.jsのバージョンを記述します。

ただし、nodenvとnvmを併用することは可能です。例えば、nvmを使ってシステム全体でNode.jsのバージョンを管理し、nodenvを使ってプロジェクトごとにバージョンを切り替えるといった使い方ができます。

ただし、混乱を避けるため、どちらか一方のツールに統一することが推奨されます。Node.jsのバージョン管理にはnvmの方が広く使われているので、特別な理由がない限りはnvmを使うのが良いでしょう。
```
併用は可能だが、同時インストールによる互換性などのバグが怖いので、とりあえず`nodenv`のインストールは後回しにする

## ViteでReact環境を作る

```
@MacBook-Pro Chapter1_task1 % npm create vite@latest
Need to install the following packages:
  create-vite@5.2.3
Ok to proceed? (y) y
✔ Project name: …  sample-vite
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /Users/name_1/Desktop/_workspace_JISOU/Chapter1_task1/sample-vite...

Done. Now run:

  cd sample-vite
  npm install
  npm run dev

npm notice 
npm notice New major version of npm available! 8.19.2 -> 10.5.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.5.0
npm notice Run npm install -g npm@10.5.0 to update!
npm notice 
@MacBook-Pro Chapter1_task1 % cd
@MacBook-Pro ~ % pwd                      
/Users/name_1
@MacBook-Pro ~ % cd /Users/name_1/Desktop/_workspace_JISOU/Chapter1_task1/sample-vit
cd: no such file or directory: /Users/name_1/Desktop/_workspace_JISOU/Chapter1_task1/sample-vit
@MacBook-Pro ~ % cd /Users/name_1/Desktop                                           
@MacBook-Pro Desktop % cd _workspace_JISOU/Chapter1_task1/sample-vit
cd: no such file or directory: _workspace_JISOU/Chapter1_task1/sample-vit
@MacBook-Pro Desktop % cd _workspace_JISOU/Chapter1_task1           
@MacBook-Pro Chapter1_task1 % cd sample-vite 
@MacBook-Pro sample-vite % pwd
/Users/name_1/Desktop/_workspace_JISOU/Chapter1_task1/sample-vite
@MacBook-Pro sample-vite % 
```
```
@MacBook-Pro sample-vite % npm i 

added 279 packages, and audited 280 packages in 16s

103 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite %  npm run dev

> sample-vite@0.0.0 dev
> vite


  VITE v5.2.6  ready in 252 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
