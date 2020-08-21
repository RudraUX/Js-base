
async function getUserInfo(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res)
    const data = await res.json()
    console.log(data)
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
]

async function getAllUserInfo(){

    try{

        const [posts, comments, albums] = await Promise.all(urls.map
            ( url => fetch(url).then( res => res.json())))    
                                                
            console.log(posts)
            console.log(comments)
            console.log(albums)
    }catch(err){
        console.log('opps', err)
    }

    
}

// const loopThroughUrl = urls => {
//     for (url of urls){
//         console.log(url)
//     }
// }

async function getAllUserInfo2(){
    const promisesArray = urls.map(url => fetch(url))
    console.log('promiseArray !!!'+ promisesArray)

    for await(let req of promisesArray){

        //console.log('This is the object response'+req)

        const  data = req.json()

        console.log(data)
    }
}



const  promisify = (item,delay) => {
   return new Promise((resolve)=> 
        setTimeout(() => 
            resolve(item), delay)
    )
}

const a = () => promisify('a', 300)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 1000)

async function parallel(){
    const allPromises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all(allPromises)
    
    return `Parallel promises are ${output1} ${output2} ${output3}`
}

async function race(){
    const allPromises = [a(), b(), c()]
    const [output] = await Promise.race(allPromises)

    return `the winner of the race is ${output}`
}

async function sequence(){
    const aoutput = await a()
    const boutput = await b()
    const coutput = await c()

    return `Getting the sequance ${aoutput} ${boutput} ${coutput}` 
}

parallel().then(console.log)
race().then(console.log)
sequence().then(console.log)