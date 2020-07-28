// Stores the global state

import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

const initialAddress = {
    host: "",
    port: 8182
  }

const initialState = {
    address: initialAddress,
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext([initialState, () => {}]);
export default Store;