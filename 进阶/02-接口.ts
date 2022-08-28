interface Person {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

let customer: Person = {
    firstName: "shentu",
    lastName: "sifan",
    sayHi: (): string => {
        return "Hi,this here"
    }
};

console.log(customer);
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

// 单接口继承
interface People {
    name: string,
}

interface Student extends People {
    id: number,
}

let stu: Student = {
    name: "sifan",
    id: 123,
}
console.log(stu);


// 多继承接口

interface Inf1 {
    val1: number,
}

interface Inf2 {
    val2: number,
}

interface Inf3 extends Inf1, Inf2 {
    val3: number,
}

let inf3: Inf3 = {
    val1: 1,
    val2: 2,
    val3: 3
}
console.log(inf3);



