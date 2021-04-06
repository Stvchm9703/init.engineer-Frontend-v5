# 純靠北工程師 前端模板 README.md

![GitHub contributors](https://img.shields.io/github/contributors/init-engineer/init.engineer-frontend-template.svg)
![GitHub stars](https://img.shields.io/github/stars/init-engineer/init.engineer-frontend-template.svg?style=social)

- [官方網站](https://kaobei.engineer)
- [Facebook 正式機 粉絲團](https://www.facebook.com/init.kobeengineer)
- [Facebook 測試機 粉絲團](https://www.facebook.com/kaobei.engineer)
- [Twitter 粉絲團](https://twitter.com/kaobei_engineer)
- [Plurk 粉絲團](https://www.plurk.com/kaobei_engineer)

- [純靠北工程師 前端模板 README.md](#純靠北工程師-前端模板-readmemd)
  - [簡介[intro]](#簡介intro)
  - [我要如何使用？ (只是想用vue檔而不動這repo源碼的朋友)](#我要如何使用-只是想用vue檔而不動這repo源碼的朋友)
  - [How can I contribute the component ?](#how-can-i-contribute-the-component-)

---
## 簡介[intro]

大家好，這是一份純靠北工程師的前端模板，面向的是單純只做局部頁面開發的前端開發者，如果你單純只想寫頁面，那這個 Repository 將是你最適合的模板範例，模板提供了最基本的前端資源，以及更進一步的 `scss`、`package.json`、`webpack.mix.js` ... 等等。

This repo is for frontend development in [feature/v5.0](), 
for me, I am not a good PHP user, and not even love PHP. So, what can I do is, using this frontend-template to build up Vue Component to contribute to main repo.

For this sub-module, we use Vue as JS component framework, and Webpack in Laravel-Mix. Since it may more clearfy for component usage, this repo may add the storybook as the documentation and demo.

簡單而言(TL;DR;);這repo是專給只愛前端,不想碰到後端的人而開; 而且我們會用

- vue: js frontend componet 
- webpack with Laravel-Mix : Laravel 的 package 打包
- SASS/SCSS : 炫炮的CSS 
- Storybook : 用來展示炫炮的vue component和各種webpage element, 確保主線/後面 php/blade 的朋友知道怎用你的component

## 我要如何使用？ (只是想用vue檔而不動這repo源碼的朋友)

1. download this repo 
2. just copy what you need (`public/**/*.*` , `resources/**/*`)
3. open (`storybook-static/index.html`) in browser, then you take notes in design system document.

## How can I contribute the component ?
1. make sure you have git clone this repo, and run `npm install / yarn install`
2. create a new vue file (.vue) in `resources/frontend/components` and SCSS file (.scss) in `resources/
3. make you own work 
4. start the storybook local server to check it out!

make sure you have the following dependance :
node version : (LTS) 14.16.1
npm version : 7.8 
yarn version : 1.22

