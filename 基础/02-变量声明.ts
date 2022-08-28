// 全局变量
const a: string = "Hello";
const b: number = 3;

class Demo {
    // 实例变量
    num_val = 12;
    // 静态变量
    static sval = 13;

    func(): void {
        // 局部变量
        const t_num: number = 3;
    }
}

console.log(a)
console.log(b)

let demo = new Demo();

console.log(demo.num_val)

console.log(Demo.sval)