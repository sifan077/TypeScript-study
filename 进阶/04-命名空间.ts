// 使用命名空间是为了解决重名问题
// 命名空间支持嵌套，即你可以将命名空间定义在另外一个命名空间里头。

namespace SpaceA {
    export interface InfA {
        age: number;
    }
}

namespace SpaceB {
    export interface InfA {
        name: string;
    }
}

let t1: SpaceA.InfA = {
    age: 12
}

let t2: SpaceB.InfA = {
    name: "shentu"
}

console.log(t1)
console.log(t2)