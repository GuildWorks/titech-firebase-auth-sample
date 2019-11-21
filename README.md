# Nuxt.js Project

## Install repository
```
$ mkdir ~/workspace
$ cd ~/workspace/
$ git clone https://github.com/GuildWorks/titech-firebase-auth-sample.git

```

## Initial launch
1. Install libraries
```$xslt
$ cd ~/workspace/titech-firebase-auth-sampl/
$ yarn install
```

## Launch application for local
```
$ cd ~/workspace/<project-name>/
$ yarn dev
```

## install Visual Studio Code
- [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Practice1: SignUp
- `pages/sign_up.vue` を開く
- [Firebaseのドキュメント](https://firebase.google.com/docs/auth/web/start?hl=ja)を元に新規登録機能を作ってみよう

## Practice2: Login
- `pages/login.vue` を開く
- SignUpと同じようにログイン機能を作ってみよう

## Practice3: Check token
- [Firebaseのドキュメント](https://firebase.google.com/docs/auth/web/start?hl=ja)を元にトップページを開くときにトークンをチェックしよう
- チェックしたトークンがない場合はログインページに遷移させてみよう

## build & start for production
```
$ cd ~/workspace/<project-name>/
$ yarn build
$ yarn start
```

open browser
[localhost:3000](http://localhost:3000)

## Development tools
- [Visual Studio Code](https://code.visualstudio.com/)
- [Veture](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vue-devtools](https://github.com/vuejs/vue-devtools)
