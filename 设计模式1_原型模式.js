/**
**设计模式1:原型模式
**/
class Animal {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	speak(){
		return '汪'
	}
}

let dog = new Dog('小汪');
dog.getName();
dog.speak();
