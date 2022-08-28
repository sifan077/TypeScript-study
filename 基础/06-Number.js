console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
// 非数字值
var a = Number.NaN;
console.log("a===========>" + a);
// Number对象方法
var num = 123.145678;
// 把对象的值转换为指数计数法。
console.log(num.toExponential());
// 把数字转换为字符串，并对小数点指定位数。
console.log("0位小数=======>" + num.toFixed());
console.log("1位小数=======>" + num.toFixed(1));
console.log("3位小数=======>" + num.toFixed(3));
console.log("5位小数=======>" + num.toFixed(5));
// 把数字格式化为指定的长度
console.log("默认长度=======>" + num.toPrecision());
console.log("长度为1=======>" + num.toPrecision(1));
console.log("长度为2=======>" + num.toPrecision(2));
console.log("长度为5=======>" + num.toPrecision(5));
// 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10
console.log("10进制========>" + num.toString());
console.log("2进制========>" + num.toString(2));
console.log("4进制========>" + num.toString(4));
console.log("6进制========>" + num.toString(6));
console.log("8进制========>" + num.toString(8));
console.log("9进制========>" + num.toString(9));
// 返回一个 Number 对象的原始数字值。
console.log(num.valueOf());
