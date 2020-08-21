let elf1 = {
    name : 'Rudolf',
    weapon : 'Bow',
    attack(){
        return `${this.name} attacks with ${this.weapon} `
    }
}

let elf2 = {
    name : 'Bee',
    weapon : 'Bow',
    attack(){
        return `${this.name} attacks with ${this.weapon} `
    }
}

console.log(elf2.attack())

//factory Function

function createElf(name, weapon){
    return {
        name,
        weapon,
        attack(){
            console.log(`${this.name} can attack with ${this.weapon}`)
        }
    }
}

let elfFrodo = createElf('Frodo', 'fire')

elfFrodo.attack()


//Object.create()


const getAttack = {
    attack(){
        console.log(`${this.name} can attack with ${this.weapon}`)
    }
}

function createMoreElf(name, weapon){
    let newElf = Object.create(getAttack)

    newElf.name = name
    newElf.weapon = weapon

    return newElf

}

let elfKakashi = createMoreElf('Kakashi', 'Kunai')

elfKakashi.attack()

//Constructor Functions
Elf.prototype.attack = function(){
    console.log(`${this.name} can attack with ${this.weapon}`)
}
function Elf(name, weapon){
    this.name = name
    this.weapon = weapon
}

let elfPatrick = new Elf('Patrick', 'Ice')

console.log(elfPatrick.name)
elfPatrick.attack()


// HOF

// const multiply = (fn) => fn(5)

// multiply(function(a){return a*a})

//Clouser

function clouser(){
    let count = 55

    return function getIncrement() {
        return count
    }
}

console.log(clouser()())


//currying

const getCurry = (a) => (b) => a*b

//partial application

const multiply = (a,b,c) => a*b*c

const getMultiplay = multiply.bind(null, 5)

console.log(getMultiplay(5,5))


//cache

let cache = {}

function getCache(n){
    if (n in cache) {
        return cache[n]
    }else{
        console.log('Long Time')

        cache[n] = 5 + 80

        return cache[n]
    }
}

console.log(getCache(5))
console.log(getCache(5))
