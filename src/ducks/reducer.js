const initialState = {
    best_sellers:[],
    email_input:'',
    user_id: 0,
    name:'',
    shouldUpdate: 1,
    cart:[],
}
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CART = 'UPDATE_CART'
const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}
export function updateAmount(id, newQuantity){
    console.log('updateAmount action hit')
    return({
        type: UPDATE_AMOUNT,
        payload: {id, newQuantity}
    })
}

export function updateCart(item){
    return({
        type: UPDATE_CART,
        payload: item
    })
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    let newState = {...state}
    switch(type) {   
        case UPDATE_USER: 
            const {user_id, name} = payload;
            return {...state, user_id, name}
        
        case UPDATE_CART:
            const {cart} = newState
            cart.push(payload)
            // newState.cart = cart
            return newState

        case UPDATE_AMOUNT:
            newState.shouldUpdate += 1
            const item = newState.cart.find((element)=> {
                return(
                    payload.id === element.product_id
                )
            })

            console.log({...item})
            item.amount=payload.newQuantity
            console.log({...item})
            return newState
        default:
            return state;       
    }
}
