// 声明数字数组
var arr = [1, 2, 3, 3, 4, 5];
// 二维数组
var brr = [["1", "2", "3"], ["4", "5", "6"]];
console.log(brr);
// every() 检测数值元素的每个元素是否都符合条件。
function isLessFive(element) {
    return element < 5;
}
console.log(arr.every(isLessFive));
// 检测数值元素，并返回符合条件所有元素的数组。
console.log(arr.filter(function (item) {
    if (item < 3)
        return item;
}));
// 数组每个元素都执行一次回调函数。
arr.forEach(function (item) {
    console.log(item + "执行回调");
});
// 搜索数组中的元素，并返回它所在的位置。
// 如果搜索不到，返回值 -1，代表没有此项。
console.log("2的位置是" + arr.indexOf(2));
console.log("7的位置是" + arr.indexOf(7));
//返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
console.log("3从后往前的第一个位置是" + arr.lastIndexOf(3));
// 把数组的所有元素放入一个字符串。
console.log(arr.join(","));
console.log(arr.join("+"));
// 通过指定函数处理数组的每个元素，并返回处理后的数组。
arr.map(function (item) {
    console.log("map:" + item);
});
// 删除数组的最后一个元素并返回删除的元素。
var pop = arr.pop();
console.log("删除arr最后一个元素为" + pop);
// 向数组的末尾添加一个或更多元素，并返回新的长度。
console.log("添加元素");
arr.push(pop);
// 反转数组的元素顺序。
console.log([1, 2, 3].reverse());
// 删除并返回数组的第一个元素。
console.log([1, 2, 3, 4].shift());
// 选取数组的的一部分，并返回一个新数组。
console.log(arr.slice(2, 4));
// 检测数组元素中是否有元素符合指定条件。
console.log([1, 3, 5, 7, 9, 10].some(function (item) {
    return item % 2 === 0;
}));
// 对数组的元素进行排序。
console.log([2, 1, 5, 4, 7].sort());
console.log(arr.toString());
// 向数组的开头添加一个或更多元素，并返回新的长度。
console.log(arr.unshift(222));
