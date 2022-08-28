var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 方法
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    ;
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("shentu", 12);
console.log(person.getAge());
person.printName();
// 类的继承,ts的继承基本同java，支持单类多重继承
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.area = area;
    }
    Shape.prototype.printArea = function () {
        console.log("父类的执行方法");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.area);
    };
    // 重载方法
    Circle.prototype.printArea = function () {
        _super.prototype.printArea.call(this); // 调用父类的方法
        console.log("子类的执行方法");
    };
    return Circle;
}(Shape));
var circle = new Circle(15);
console.log(circle);
circle.disp();
circle.printArea();
Shape.len = 1; // 声明类的静态变量
console.log(Shape.len); // 打印类的静态变量
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
var tempObj = {};
console.log("tempObj是类Circle实例化的对象吗？" + (tempObj instanceof Circle));
console.log("circle是类Circle实例化的对象吗？" + (circle instanceof Circle));
// 权限控制
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类访问,在外面访问不到。
// private : 私有，只能被其定义所在的类访问。
var ClassA = /** @class */ (function () {
    function ClassA(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ClassA.prototype.printA = function () {
        console.log("ClassA中的私有变量" + this.a);
    };
    return ClassA;
}());
var ClassB = /** @class */ (function (_super) {
    __extends(ClassB, _super);
    function ClassB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassB.prototype.printA = function () {
        _super.prototype.printA.call(this);
        console.log("ClassA中的保护变量" + this.b);
    };
    return ClassB;
}(ClassA));
var classA = new ClassA(1, 2, 3);
var classB = new ClassB(1, 2, 3);
console.log(classB.c);
classA.printA();
console.log("子类能获取到保护变量");
classB.printA();
var InfImpl = /** @class */ (function () {
    function InfImpl(age, name) {
        this.age = age;
        this.name = name;
    }
    InfImpl.prototype.sayHi = function () {
        return "name=" + this.name + "   " + "age=" + this.age;
    };
    return InfImpl;
}());
var infImpl = new InfImpl(10, "shentu");
console.log(infImpl);
console.log(infImpl.sayHi());
