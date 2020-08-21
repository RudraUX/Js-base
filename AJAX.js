//callbacks are function that will run later

function userInfo(email, password, callback){
        setTimeout(() =>{
            callback({userEmail : email})
        },3000)
}

function getVideo(email, callback){
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

console.log('Start')


//  userInfo('pk@gmail.com', 1224242, 
//     getUserInfo => {
//         console.log(getUserInfo)
//             getVideo(getUserInfo.userEmail, (videos) =>{
//             console.log(videos)
//             }
//         )
//     }
// )



console.log('end')

//lets Play along with Promises

//Refactoring the above code with promises

function userLogIn(email, password){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({email : email, password: password})
        },3000)
    })
}

function userVideos(email){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['video1', 'video2'])
        }, 2000)
    })
}

function userVideoDetail(video){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('This video is about Programming')
        }, 1000)
    })
}


//promises or rather then u 
// can say .then can't return or console log when 
// it is doing multiple asyncronus tasks 

// userLogIn('pk', 1233)
//     .then(user => userVideos(user.email))
//     .then(video => userVideoDetail(video[0]))
//     .then(detail => console.log(detail))
    

//now lets use async await to make it more simple
// you can console log anything you want
async function getUserInformation(){
    const loggedUser = await userLogIn('pk', 1233)
    const Videos = await userVideos(loggedUser.email)
    const VideoDetail = await userVideoDetail(Videos[0])
    console.log(VideoDetail)
}


getUserInformation()


