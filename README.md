# beian.js 

只有经过备案的字符串才可以在代码中使用

## 备案方法

1. fork 此项目 https://github.com/aoao-eth/beian.js
2. 在 ./data/strings.txt 中增加一行字符串
3. 提交 PR
4. PR 被合并后，npm 包会自动更新新版本，你可以使用 `npm install beian.js` 来安装最新版本

## 使用方法

```js
import sb from 'beian.js'

sb('hello world') // true

sb('bye world') // throw Error
```
