//高阶函数 reduce
function pow(x,y){
	return x + y;
}
function pow1(x,y){
	 return x * 10 + y;
}
var arr = [1,2,3],
	arr1 = [1,3,5,7,9];
var sum = arr.reduce(pow);
var num = arr1.reduce(pow1);

console.log(sum);//6
console.log(num);//13579

var arr2 = ['1', '2', '3'];
var r = arr2.map(parseInt);
console.log(r);//[1,NaN,NaN]
/*
语法parseInt(string, radix)； 
string 必需。要被解析的字符串。 
radix 可选。表示要解析的数字的基数。
该值介于 2 ~ 36 之间。 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。 
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
*/