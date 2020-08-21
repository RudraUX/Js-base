// var a = 6
// var a = 7

// console.log(a)

// aa()

// function aa(){
//     console.log('1')
// }

// function aa(){
//     console.log('2')
// }

// aa()

const relationShip = (g) => (f) => (s) => console.log(`${g} ${f} ${s}`)

relationShip('Grandfather')('Father')('Son')

let view 

function initialize(){
    let called = 0
        return function(){
            if (called > 0)
            {
                return

            }else
        {
            view = 'ho ho ho'
            console.log('View has been initialized!!')
            called++
        }
    }
}

let calledOnce = initialize()
calledOnce()
calledOnce()


console.log(view)


// let array = [1,2,3,4]

// for (var i = 0; i < array.length; i++) {
//     (function(clouserId){setTimeout((function(){
//         const element = array[clouserId];
//         console.log(element)
//     }),1000)})(i)
    
// }

let dragon = {
    name : 'Andy',
    ice : true,
    attack(){
        return 10
    },
    sing(){
        if(this.ice){
            return `My name is ${this.name} and I sing La la LA `
        }
    }

}

let lizard = {
    name : 'Kiki',
    attack(){
        return 3
    }
}

lizard.__proto__ = dragon

// let lizprop = dragon.sing.bind(lizard)
// console.log(lizprop())
console.log(lizard.sing())