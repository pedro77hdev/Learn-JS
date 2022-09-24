// String , boolean , number

let x: number = 10

x = 20

console.log(x)

// inferencia x annotation

let y = 12 //inferencia
let z: number = 13 // annotation

//tipos básicos 

let firstName: string = "pedro"
let age: number = 16
const isAdmin: boolean = true

// String != String 

console.log(typeof age)

// object

const mynumbers: number[] = [1, 2, 3]

mynumbers.push(5)

console.log(mynumbers)

// tuplas 

let mytuple: [number, string, string[]]

mytuple = [2, 'a', ['a', 'a']]

// Object Literals 

const object: { name: string, age: number } = {
    name: "Pedro",
    age: 16

}

console.log(object)

// any 

let a: any = 0

a = true

// union type 

let id: string | number = "10"

id = 200


//type alias 

type myidtype = number | string

const userId: myidtype = 10

//enum
//tamanho de roupas (size: Medio , size:pequeno)

enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "camisa",
    size: size.P

}

console.log(camisa)

// literal types 

let teste: "autenticado" | null

teste = "autenticado"
teste = null

//interfaces 

interface mathFunctionParams {
    n1: number,
    n2: number
}

function somenumbers(nums: mathFunctionParams) {
    return nums.n1 + nums.n2

}

function multiplyNumbers(nums: mathFunctionParams) {
    return nums.n1 * nums.n2
}

console.log(multiplyNumbers({ n1: 1, n2: 2 }))

//generics

function showArrayItems<T>(arr: T[]){

    arr.forEach((item) =>{
        console.log(`ITEM: ${item}`)
    })
}

showArrayItems([1 ,2 , 3])

