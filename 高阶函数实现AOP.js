/**
**高阶函数实现AOP 【AOP:面向切面编程，把一些和核心业务逻辑模块无关的功能抽离出来，再通过“动态织入”的方式掺入业务逻辑模块中】
**/
Function.prototype.before = function(beforefn) {
	var self = this;	//保存原函数引用
	return function(){	//返回包含了原函数和新函数的 '代理函数'
		beforefn.apply(this, arguments);	//执行新函数，修正this
		return self.apply(this,arguments);	//执行原函数
	}
}

Function.prototype.after = function(afterfn) {
	var self = this;
	return function(){
		var ret = self.apply(this,arguments);
		afterfn.apply(this, arguments);
		return ret;
	}
}

var func = function() {
	console.log('2');
}
func = func.before(function() {
	console.log('1');
}).after(function() {
	console.log('3');
});

func();
