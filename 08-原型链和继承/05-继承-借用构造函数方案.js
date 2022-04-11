// 父类： 公共方法和属性
function Person(name, friends) {
  this.name = name
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name + "在吃东西")
}

// 子类： 特有的方法和属性
function Student(name, friends, sno) {
  Person.call(this, name, friends);
  this.sno = sno
}

Student.prototype = new Person()
Student.prototype.studying = function() {
  console.log(this.name + "在跑步")
}

var stu = new Student("kobe", ["james"], 112);
console.log(stu);
// stu.studying()
// stu.eating() 

//11

var stu1 = new Student("kobe", ["james"], 112)
var stu2 = new Student("why", ["lilei"], 113)
stu1.friends.push("lucy")
console.log(stu2.friends)