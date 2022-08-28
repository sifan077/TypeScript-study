// 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
var a;
a = 12;
console.log(a);
a = "x312";
console.log(a);
a = false;
console.log(a);
// 应用场景
function print(arr) {
    if (typeof arr === "string") {
        console.log("arr是字符串======》" + arr);
    }
    else {
        console.log("arr是字符数组");
        arr.forEach(function (item) {
            console.log(item);
        });
    }
}
print(["123", "456", "789"]);
print("aslkfhj");
