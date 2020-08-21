// function cars({name, model}){
  
//    return {
//        carInfo: () => `${name} ${model}`
//    }


// }

// const ford = cars({name : 'Ford', model: 'Mustang'})
// console.log(ford.carInfo())


// function flowers( name, color){
//     return [name, color]
// }

// const [name,  color] = flowers('Sunflower', 'Yellow')

// console.log(name)

const users = {
    name  : 'Rudra',
    age  : 23,
    play(){
       console.log( `${this.name} is a noob in PUBG`)

        function getAge(){
                console.log(`But his age is ${this.age}`)
        }

        const bindingToobj = getAge.bind(this)

        return bindingToobj
    }
}

const {name, age} = users

console.log(name)

users.play()()
