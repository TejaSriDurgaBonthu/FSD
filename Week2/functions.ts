//Program to demonstrate functions, parameters,return types

import { message } from "../Week4/message";

//1
function addition(a: number, b: number): number {
    return a + b;
}
let result = addition(10, 20);
console.log("Sum =", result);
//2
function square2(num: number): number {
    return num * num;
}
let ans = square2(6);
console.log("Square =", ans);
//3
function greet2(name: string): string {
    return "Hello, " + name + "!";
}
let message2 = greet2("Teja");
console.log(message2);