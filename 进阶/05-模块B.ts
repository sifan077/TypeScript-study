import shape = require("./05-模块A");

export class Circle implements shape.Shape {
    public draw() {
        console.log("Circle is drawn");
    }
}

let obj: Circle = new Circle();
obj.draw();