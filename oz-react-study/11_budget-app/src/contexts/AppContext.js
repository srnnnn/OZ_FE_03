import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expense, action.payload]
            }
            
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload //사용자가 삭제한 (action.payload)와 지금 배열의 id가 다른 것들만 새로 배열 만듬
                )
            }
            
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
            
    }
}

const initialState = {
    budget: 30000,
    expenses: [
        {id:  crypto.randomUUID(), name:'밥먹기', cost:1000},
        {id:  crypto.randomUUID(), name:'카드비', cost:3000},
        {id:  crypto.randomUUID(), name:'교통비', cost:7000},
    ]
}

export const AppContextProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState) //useState와 비슷하지만 state 보다 복잡한 로직 처리 / 인자1이 초기값이 인자2 
    return (
        // <AppContext.Provider value={{}}>
        //     {porps.children}
        // </AppContext.Provider>  => 밑에 한줄과 이게 같은 코드
        <AppContext.Provider value={{
            expenses: state.expenses,
            budget: state.budget,
            dispatch
        }} {...props}/>
    )
}

