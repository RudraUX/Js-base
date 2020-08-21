
function getCache(){
    let cache = {}
    return function(n){
        if (n in cache) {
            return cache[n]
        }else{
            console.log('Long Time')
    
            cache[n] = n + 80
    
            return cache[n]
        }
    }
}

const memoized = getCache()
console.log(memoized(5))
console.log(memoized(5))

//compose

const compose = (f, g) => (data) => f(g(data))

const multiplyBy5 = (d) => d*5

const makePositive = (d) => Math.abs(d)

const multiplyBy5MakePositive = compose(multiplyBy5, makePositive)

console.log(compose(multiplyBy5, makePositive)(-7))
// console.log(multiplyBy5MakePositive(-7))