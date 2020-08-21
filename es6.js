let a = "pk"
let b = 1
let c = true

const obj = {
    a,b,c
}

// console.log(obj.a)

let carName = "ford"

const car = {
    [carName] : "Focus",
    ["Milage"] : 200
}

// console.log(car.ford)
// console.log(`The ${carName} companies new car is Fiesta!`)

//Clousers

const first = () =>{
    let greet = "hello"
    const second = () => {
        console.log(greet)
    }
    return second
}

let greetings = first()
greetings()

//currying

let multiply = (a) => (b) => a * b

console.log(multiply(2)(3))


let doSum = (f,g) => (a) => f(g(a))

const sum = (num) => num+1



console.log(doSum(sum,sum)(6))


let cars = ["BMW", "Ferrari", "Ford", "Tesla"]

let getCar = []

cars.forEach((car) => getCar.push(car + "!"))

console.log(getCar)

//map

const myNumbers = [1, 2, 3, 4, 5]

let getMultiply1 = myNumbers.forEach((num) => {
    return num * 2
})

let getMultiply2 = myNumbers.map((num) =>  num * 2)

let getfilter = myNumbers.filter((num) => num > 3)

let getReduce = myNumbers.reduce((acc, num) => acc + num,0);//Accumelator holds a record of the array!!And here acc = 0! 


console.log(getMultiply1)
console.log(getMultiply2)
console.log(getfilter)
console.log(getReduce)

class Cars{
    constructor(name, model){
        this.name = name;
        this.model = model
    }

    carInfo(){
        console.log(`${this.name} : ${this.model}`)
    }
}

class Garage extends Cars{
    constructor(name, model, milage){
        super(name, model)

        this.milage = milage
        this.carList = []
    }

    carMilage(){
        console.log(`${this.name} has the milage of ${this.milage}`)
    }
}

const car1 = new Garage('Ford', 'Feasta', 210)

car1.carList.push('KIA','Mustang')
console.log(car1.carList)

const users ={
    user1 : "Bee",
    user2 : "Pk",
    user3 : "Andre"
}

let newUserInfo = Object.entries(users).map((value) => {
    console.log(value)
    return value[1] + value[0].replace('user', '')
}
)

console.log(newUserInfo)


function bestCar(...args){
    console.log(arguments)
    console.log(Array.from(arguments))
    
    return `${args[0]} is a fine car! `
}

console.log(bestCar('Ford'))



let aa = {
    name : 'Jose',

    bb(){
         console.log(`His name is ${this.name}`)
    }

    ,

    cc(){
        var another = () => {
            console.log( `${this.name}`)
        }
        another()
    }

}

aa.cc()



