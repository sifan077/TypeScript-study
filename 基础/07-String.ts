let str = "Hello,shentu";

console.log("字符串的长度为" + str);

// 返回在指定位置的字符
console.log(str.charAt(str.length - 1));
console.log(str.charAt(0));

// 返回在指定的位置的字符的 Unicode 编码。
console.log(str.charCodeAt(0));

let a = "你好,";
let b = "世界!";
let c = a.concat(b);
console.log(c);
console.log(a.concat(b, c));


// 返回某个指定的字符串值在字符串中首次出现的位置。
console.log("l 第一次出现的位置为=====》" + str.indexOf('l'));

// 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
console.log("l 最后次出现的位置为=====》" + str.lastIndexOf('l'));

// 用本地特定的顺序来比较两个字符串。

let str_a = "This is beautiful string";
let str_b = "This is beautiful string";
console.log("localeCompare first :" + str_a.localeCompare(str_b));

// 把字符串分割为子字符串数组。

console.log(str.split("l"));

// 提取字符串中两个指定的索引号之间的字符。

console.log(str.substring(0, 5));

// 把字符串转换为大小写。
console.log(str.toUpperCase());
console.log(str.toLowerCase());



