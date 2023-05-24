# はじめに

このドキュメントは「Pace Layering」のコーポレートサイトに導入されている、コンテンツ管理システム（以下「CMS」）の使用方法を掲載しています。

## CMS

CMS は Git ベースでオープンソースの「TinaCMS」を使用しています。

- [TinaCMS](https://tina.io/)

## インストール

以下の Git リポジトリよりデータ一式を取得します。

- [Git リポジトリ](#)

:::caution

リンク先の Git リポジトリは存在しません。

:::

データを取得したディレクトリに移動して、npm パッケージをインストールします。

```bash
npm install
```

## TinaCMS の起動

以下のコマンドで TinaCMS が起動します。

```bash
npm start
```

起動したあと、各画面には以下の URL でアクセスできます。

| 画面 | URL |
| --- | --- |
| ウェブサイトのホーム | [http://localhost:3000](http://localhost:3000/) |
| TinaCMS 管理画面 | [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html) |
