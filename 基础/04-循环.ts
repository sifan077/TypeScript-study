let count: number = 5;
let arr: number[] = [];
for (let i: number = 0; i < count; i++) {
    arr.push(i + 1);
}

console.log(arr)
let t: any;
for (t in arr) {
    console.log(arr[t])
}

let res: number = 1;
while (count >= 1) {
    res = res * count;
    count--;
}
console.log(res)