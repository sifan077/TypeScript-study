class Person {
    // 字段
    name: string;
    age: number;

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 方法
    printName(): void {
        console.log(this.name);
    };

    getAge(): number {
        return this.age;
    }
}

let person: Person = new Person("shentu", 12);
console.log(person.getAge());
person.printName();


// 类的继承,ts的继承基本同java，支持单类多重继承

class Shape {
    static len: number;
    area: number;

    constructor(area: number) {
        this.area = area;
    }

    printArea(): void {
        console.log("父类的执行方法")
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("圆的面积:  " + this.area);
    }

    // 重载方法
    printArea() {
        super.printArea();// 调用父类的方法
        console.log("子类的执行方法")
    }
}

let circle: Circle = new Circle(15);
console.log(circle);
circle.disp();
circle.printArea();

Shape.len = 1;  // 声明类的静态变量
console.log(Shape.len); // 打印类的静态变量

// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。

let tempObj = {};

console.log("tempObj是类Circle实例化的对象吗？" + (tempObj instanceof Circle));
console.log("circle是类Circle实例化的对象吗？" + (circle instanceof Circle));


// 权限控制
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类访问,在外面访问不到。
// private : 私有，只能被其定义所在的类访问。

class ClassA {
    private a: number;
    protected b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    printA(): void {
        console.log("ClassA中的私有变量" + this.a);
    }
}

class ClassB extends ClassA {
    printA() {
        super.printA();
        console.log("ClassA中的保护变量" + this.b)
    }
}

let classA: ClassA = new ClassA(1, 2, 3);
let classB: ClassB = new ClassB(1, 2, 3);

console.log(classB.c);
classA.printA();
console.log("子类能获取到保护变量");
classB.printA();

// 类和接口
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。

interface Inf {
    age: number;
    sayHi: () => string;
}

class InfImpl implements Inf {
    age: number;
    name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    sayHi(): string {
        return "name=" + this.name + "   " + "age=" + this.age;
    }
}

let infImpl: Inf = new InfImpl(10, "shentu");
console.log(infImpl)
console.log(infImpl.sayHi());