# Promise
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
# 使用Promise
Promise是一个对象，代表一个异步操作的最终结果（完成或者失败），并且这个异步操作一旦完成，就不能再改变。
比如做菜需要洗菜，切菜，炒菜，并且上一个操作执行成功之后，开始下一个操作，并带着上一个操作的执行结果。
即下一步操作需要上一步的结果。

```javascript
cookVegetables(function (result)){
washVegetables(result,function())
}
```


Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。



