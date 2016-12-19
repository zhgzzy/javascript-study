//高阶函数 map

function pow(x){
	return x * x;
}

var arr = [1,2,3,4,5];
var arrNew = arr.map(pow);

console.log(arrNew);
//[1,4,9,16,25]


var arrStr = [1,2,3,4,5];
var arrStrNew = arrStr.map(String);

console.log(arrStrNew);
//['1','2','3','4','5']