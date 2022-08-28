// 全局变量
var a = "Hello";
var b = 3;
var Demo = /** @class */ (function () {
    function Demo() {
        // 实例变量
        this.num_val = 12;
    }
    Demo.prototype.func = function () {
        // 局部变量
        var t_num = 3;
    };
    // 静态变量
    Demo.sval = 13;
    return Demo;
}());
console.log(a);
console.log(b);
var demo = new Demo();
console.log(demo.num_val);
console.log(Demo.sval);
