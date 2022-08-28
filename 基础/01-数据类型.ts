// any 可以赋任意值
let a: any = 1;
let b: any = "2";
let c: any = false;

// number 可以赋整数或者小数
let numa: number = 1;
let numb: number = 1.30;

// string 可以赋字符串
let stra: string = "Hello";

// boolean 可以赋 true, false
let flagA: boolean = false;
let flagB: boolean = true;

// 数组类型声明
// 在元素类型后面加上[]
let arrA: number[] = [1, 2];
// 或者使用数组泛型
let arrB: Array<number> = [1, 2];

// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x: [string, number];
x = ["Hello", 2];
// x = [2,"Hello"];则会报错

// void 表示函数无返回值
function f(): void {
    console.log("HelloWorld");
}

// 枚举	enum

enum Direction {
    Up,
    Down,
    Left,
    Right,
}
// 枚举内的内容依次递增

// null 表示对象缺失

// undefined 用于初始化变量为一个未定义的值

// never never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。


