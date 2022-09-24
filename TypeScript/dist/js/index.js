"use strict";
// String , boolean , number
let x = 10;
x = 20;
console.log(x);
// inferencia x annotation
let y = 12; //inferencia
let z = 13; // annotation
//tipos básicos 
let firstName = "pedro";
let age = 16;
const isAdmin = true;
// String != String 
console.log(typeof age);
// object
const mynumbers = [1, 2, 3];
mynumbers.push(5);
console.log(mynumbers);
// tuplas 
let mytuple;
mytuple = [2, 'a', ['a', 'a']];
// Object Literals 
const object = {
    name: "Pedro",
    age: 16
};
console.log(object);
// any 
let a = 0;
a = true;
// union type 
let id = "10";
id = 200;
const userId = 10;
//enum
//tamanho de roupas (size: Medio , size:pequeno)
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "camisa",
    size: size.P
};
console.log(camisa);
// literal types 
let teste;
teste = "autenticado";
teste = null;
function somenumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 1, n2: 2 }));
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
showArrayItems([1, 2, 3]);
