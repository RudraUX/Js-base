const user = {
    name : 'Kim',
    active : true,
    cart : [],
    purchases : []
}
//composing here args are given arguments of 2nd function
const compose = (f,g) => (...args) => f(g(...args))

const getpurchaseInfo = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxestoCart,
    addItemtoCart
)(user, {name : 'Laptop', price : 200})//  <----only this part

function purchaseItem(...fns){
    return fns.reduce(compose)//  each function returns individualy having a record in acc
}

function addItemtoCart(user, item){
    const updatedCart = user.cart.concat(item)

    return Object.assign({}, user, {cart : updatedCart})
}

function applyTaxestoCart(user){
    const {cart} = user
    const taxRate = 1.3
    const updatedCart = cart.map((item) => {
        return {
            name : item.name,
            price : item.price * taxRate
        }
    }
    )

    return Object.assign({}, user, {cart : updatedCart})
}

function buyItem(user){
    return Object.assign({}, user, {purchases : user.cart})
}

function emptyCart(user){
    return Object.assign({}, user, {cart : []})
}

console.log(getpurchaseInfo)