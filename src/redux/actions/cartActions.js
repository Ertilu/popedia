import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, ADD_QUANTITY } from './types';

export const addToCart = (item) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}

export const addQuantity = (item, quantity) => dispatch => {
    dispatch({
        type: ADD_QUANTITY,
		payload: item,
		quantity
    })
}

export const reduceQuantity = (item, quantity) => dispatch => {
    dispatch({
        type: 'REDUCE_QUANTITY',
		payload: item,
		quantity 
    })
}

export const removeItem = (item) => dispatch => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: item
	})
}

export const emptyCart = () => dispatch => {
	dispatch({
		type: EMPTY_CART
	})
}


