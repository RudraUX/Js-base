let database = [
    {name: "Pollab", password: "1234"},
    {name: "Rob", password: "777"},
    {name: "Rachel", password: "999"}

];

let newsFeed = 
[
    {
        name : "Bratati",
        feed : "This is so Boring"
    },
    {
        name : "Subham",
        feed : "I love Pubg!"
    }
];



function isUserValid(username, password){
for (let i = 0; i < database.length; i++) {
    const element = database[i];
   
    if(username === element.name && password === element.password)
    {
        return true;
     }
}
   return false;
}

function logInUser(username, password){
        if (isUserValid(username, password)) {
            console.log(newsFeed)
        }else{
            console.log("Invalid Username and password!!")
        }
};


let userNamePromt= prompt("Please Enter your name :");
let userPasswordPromt = prompt("Please Enter Your Password :");

 logInUser(userNamePromt, userPasswordPromt)

