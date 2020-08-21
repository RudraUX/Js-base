const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('This is working')
    } else {
        reject('Error, it broke!!!')
    }
})


promise
    .then(result => result + '!') // // throw Error
    .then(result2 => console.log(result2))
    .catch(() => console.log('Error!!!!!!!!!!!!!!!!!!!!!!!'))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Yo what are you doing??')
})

const promise3 = new Promise((res, rej) => {
    setTimeout(res, 5000, 'I am doing fine:)')
})

Promise.all([promise2, promise3])
    .then(values => console.log(values))

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
]

//fetch creates a new promise and Promise all always takes an array of promises
Promise.all(urls.map(url => fetch(url).then(res.json())))
    .then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    })