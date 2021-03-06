var obj = {
  name: "xionglp"
}

console.log(obj.__proto__.constructor);

// Foo作为一个函数，那么它会有一个显示原型对象： Foo.prototype
// Foo.prototype来自哪里？
// 答案： 创建了一个函数，Foo.prototype = { constructor: Foo }

// Foo作为一个对象，那么它会有一个隐式原型对象： Foo.__proto__
// Foo.__proto__来自哪里？
// 答案： new Function() Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

// var Foo = new Function()
function Foo() {

}

console.log(Foo.prototype === Foo.__proto__)
console.log(Foo.prototype.constructor)
console.log(Foo.__proto__.constructor)