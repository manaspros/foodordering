import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, menuItemParams } from "../TypesCheck/typesCheckParams"



export const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cart: [],
    },
    reducers: {
        addToCart : (state:CartItem, action:PayloadAction<menuItemParams>)=> {
            const itemPresent = state.cart.find((item)=> item._id === action.payload._id)

            if(!itemPresent) {
                state.cart.push({...action.payload})
            }

        },

        removeFromCart: (state:CartItem, action:PayloadAction<menuItemParams>)=> {
            const removeItem = state.cart.filter((item)=> item._id !== action.payload._id)

            state.cart = removeItem

        },



        incrementQuantity : (state:CartItem, action:PayloadAction<menuItemParams>)=> {
            const getResult = state.cart.find((item)=> item._id === action.payload._id)

            if(getResult) {
                getResult.quantity++
            }

        },


        decrementQuantity : (state:CartItem, action:PayloadAction<menuItemParams>)=> {
            const getItem = state.cart.find((item)=> item._id === action.payload._id)

            if(getItem) {
                getItem.quantity--
            }

        },

        emptyCart: (state)=>{
            state.cart = [];
        }

        

        
    }
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity, emptyCart} = CartSlice.actions
export default CartSlice.reducer;