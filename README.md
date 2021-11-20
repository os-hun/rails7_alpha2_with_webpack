# 概要

Rails v7.alpha2 で webpack を指定して React + Typescript の開発環境を作る

```
// webpack指定コマンド
$ rails new . -j webpack

// webpack指定コマンド (with Rails version)
$ bundle exec rails _7.0.0.alpha2_ new . -j webpack
```

## 環境

### Version

| --         | version      |
| ---------- | ------------ |
| ruby       | 3.0.1        |
| rails      | 7.0.0.alpha2 |
| webpack    | 5.64.1       |
| typescript | 4.5.2        |
| react      | 17.0.2       |
| react-dom  | 17.0.2       |

### ディレクトリ

```
.
├── app
│   ├── assets
│   ├── channels
│   ├── controllers
│   ├── helpers
│   ├── javascript
│   ├── jobs
│   ├── mailers
│   ├── models
│   ├── ts
│   └── views
├── bin
├── config
├── db
├── lib
├── log
├── public
├── storage
├── test
├── tmp
└── vendor
```

### 構築

```
// back
$ bundle install

// front
$ yarn install
```

## Server

```
$ yarn run dev
-> foreman start -f Procfile.dev

// foremanをinstallしていない場合
$ gem install foreman
```
