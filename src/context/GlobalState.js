import React, { createContext , useReducer } from 'react'


const initialState = {

transactions:[

        {id:1,description:"Income 1",transactionAmount:1000},
        
        {id:2,description:"Expense 1",transactionAmount:-100},
        
        {id:3,description:"Income 2",transactionAmount:2000},
        
        {id:4,description:"Expense 2",transactionAmount:-500}
]

}
// Create the Global Context
export const GlobalContext =createContext(initialState);

//Create a Provider for the Global Context
export const GlobalProvider = () => {

        const [state,dispatch] = useReducer(AppReducer , initialState)
        return (
<GlobalContext.Provider value={
 {
    transactions: state.transactions
//}
 }
}>
</GlobalContext.Provider>

        )

}