# README下書き

## サービス名: 学習記録アプリ

### サービスの説明

エンジニアとしての学習時間は1000時間が必要と言われています
そこで日々の学習の内容と学習時間を記録するアプリを作ることにしました

## 環境設定の方法(.envなど)

### シークレット情報は、`GitHub Secrets`で設定しています。

<details><summary>設定方法</summary>

 1. GitHubリポジトリのページに移動します。
 1. **Settings** タブをクリックします。
 1. 左側のサイドバーで **Secrets and variables** を展開し、**Actions** を選択します。
 <img width="1560" alt="Image" src="https://github.com/user-attachments/assets/59b7bdc5-570e-4147-9877-ebfd35715548" />
 1. **New repository secret** ボタンをクリックするか既存の設定を編集します。
        <img width="1495" alt="Image" src="https://github.com/user-attachments/assets/5a3ad238-a077-4412-b45d-985e32f9f109" />
 1. `.env`file内に設定されている値を入力/更新します。
 1. **Add secret** をクリックして保存します。


</details>

<br>
<br>

---
# 起動の仕方
## ローカル環境
```
$ npm run dev
```

### makeコマンドで一発でデプロイする
```
$ make deploy
```
`make deploy`で`npm run build`と`firebase deploy`を2つ実行してくれる

[参考](https://hackmd.io/3reHl9E6TF6q-UpnBDFAhg#MVP4)


## 本番環境 CI/CD 

`Git push`すれば、自動でデプロイされます。<br>

- 詳細: [./github/workflows
/main.yml](https://github.com/tkm0v0/Chapter1_issue2/blob/main/.github/workflows/main.yml)
