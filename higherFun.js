//高阶函数

function sum(x){
	return x + x;
}

function highFun(x,y,f){
	return f(x) + f(y);
}

var num = highFun(2,3,sum);

console.log(num);