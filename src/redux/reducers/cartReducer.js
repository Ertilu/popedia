import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, ADD_QUANTITY } from '../actions/types';
import { ActionSheet } from 'native-base';

const initialState = {
    cart: [],
    total: 0,

}

export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:
            const data = {...action.payload, quantity: 1}
            return {
                ...state,
                cart: [data, ...state.cart],
                total: state.total + action.payload.price,
            }
        case ADD_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(data => {
                    if (data._id == action.payload._id) {
                        data.quantity = action.quantity
                    }
                    return data
                }),
                total: state.total + action.payload.price
            }
        case 'REDUCE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(data => {
                    if (data._id == action.payload._id) {
                        data.quantity = action.quantity
                    }
                    return data
                }),
                total: state.total - action.payload.price
            }    
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: state.total - action.payload.item.cost
            }
        default:
            return state
    }
}
