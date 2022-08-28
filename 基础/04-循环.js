var count = 5;
var arr = [];
for (var i = 0; i < count; i++) {
    arr.push(i + 1);
}
console.log(arr);
var t;
for (t in arr) {
    console.log(arr[t]);
}
var res = 1;
while (count >= 1) {
    res = res * count;
    count--;
}
console.log(res);
