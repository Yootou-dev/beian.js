# beian.js 

只有经过备案的字符串才可以在代码中使用，否则会报错

## 为什么

可以让我们在使用字符串的时候，更加安全，更加放心，不用担心字符串被篡改，或者被恶意替换，从而导致程序出现问题，或者被攻击，从而导致损失。


## 备案方法

1. fork 此项目 https://github.com/aoao-eth/beian.js
2. 在 ./data/strings.txt 中增加一行字符串
3. 提交 PR
4. PR 被合并后，npm 包会自动更新新版本，你可以使用 `npm install beian.js` 来安装最新版本

## 使用方法

```js
import sb from 'beian.js'

sb('hello world') // true

sb('bye world') // throw Error 字符串 "bye world" 没有经过备案，暂时无法使用
```

## 关于字符串备案的要求和标准

1. 字符串必须是有意义的，不能是随机字符串
2. 字符串必须是你自己的，不能是别人的
3. 字符串必须是字符串，不能是数字，不能是对象，不能是数组，不能是函数，不能是其他类型
