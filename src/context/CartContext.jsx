import React, { createContext, useContext, useReducer } from 'react'
import { SumProducts } from '../components/helpers/helpers';


const initialState ={
selectedItems :[],
itemsCounter:0,
total:0,
checkout:false

};

const reducer = (state , action) =>{
switch (action.type) {
  case "ADD_ITEM":
    if(!(state.selectedItems.find(item => item.id === action.payload.id))){
      state.selectedItems.push({...action.payload,quantity: 1})
    }
  return{
    ...state,
    ...SumProducts(state.selectedItems),
    checkout:false
  }

  case "REMOVE_ITEM":
    const newSelectedItems = state.selectedItems.filter( item => item.id !== action.payload.id)
    return {
      ...state , 
      selectedItems:[...newSelectedItems],
      ...SumProducts(state.selectedItems)
    }
    case "INCREASE" :
    const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
    state.selectedItems[index].quantity++;
    return {
      ...state ,
      ...SumProducts(state.selectedItems)
    }

    case "DECREASE" :
      const index2 = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[index2].quantity--;
      return {
        ...state ,
        ...SumProducts(state.selectedItems)
      }

      case "CHECKOUT" :
        return {
          selectedItems:[],
          itemsCounter:0,
          total:0,
          checkout:true,
        }
  default:
    throw new Error("Invalid Action")
}
}


const cartContext = createContext();

function CartProvider({children}) {
   const [ state , dispatch]= useReducer(reducer,initialState)
   
  return (
  <cartContext.Provider value={{state,dispatch}}>
    {children}
  </cartContext.Provider>
  )
}
const useCart = () => {
const {state,dispatch} = useContext(cartContext)
return [state,dispatch];
}
export default CartProvider
export { useCart }