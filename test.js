var a = 5
let b = 6

console.log(a,b)

if(5>1){
    var a = 13
    let b = 46
    console.log(a,b)
}

console.log(a,b)

function getab(){
    var a = 60
    let b = 70

    console.log(a,b) 
}


getab()

console.log(a,b) 

//pass by value
let aimbot = 6
let botbot = aimbot

botbot++

console.log(botbot)
console.log(aimbot)
//pass by reference
let user1 = { name : 'Rudolf' ,skill : 'Java' }
let user2 = user1

user2.skill = 'python'

console.log(user1)
console.log(user2)


let myarray = [1,2,3,4]
let newarrary = [].concat(myarray)

myarray.push(22)

console.log(myarray)
console.log(newarrary)

let teamA = { a : 'a', b : 'b', c : 'c'}

let teamB = Object.assign({}, teamA)

teamB.c = 56

console.log(teamA)
console.log(teamB)

let teamC = {add(num1){
    this.c += num1
}}

// teamC.add.call(teamB, 50)
// teamC.add.apply(teamB, [59])
let bindobj = teamC.add.bind(teamB, 59)//bind creates a seperate function of the task 
bindobj()

console.log(teamB)


function giveAccessTo(name){

    return `Access granted to ${person.name}`
}

let authenticate = (varify) => {
    let array = []

    for (let i = 0; i<varify ; i++ ){
        array.push(i)
    }

    return giveAccessTo(person)
}

function sing(person){

    return `la la la I acn sing my name is ${person.name}`
}

const letPerson = function(person, fn){
    if(person.level === 'Admin'){
        return fn(person)
    }else if(person.level === 'User'){
        return fn(person)
    }

 }

console.log(letPerson({name : 'Bratati', level : 'Admin'}, sing))


// function multiply(num){
//     return num * 10
// }

// function multiplyBy10(num, fn){
//     return fn(num)
// }

// console.log(multiplyBy10(50, multiply))

function multiply(num1){
   return function(num2){
            return num1 * num2
    }
}

let multiplyBy2 = multiply(2)

console.log(multiply(60)(3))
console.log(multiplyBy2(60))







