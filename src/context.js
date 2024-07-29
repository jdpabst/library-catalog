import React, { createContext, useContext, useReducer } from "react";


export const userActions = {
 SET_CATALOG: "SET_CATALOG",
 SET_NEWBOOK: "SET_NEWBOOK",
 SET_EDITBOOK: "SET_EDITBOOK"
};

export function getInitialState() {
 return {
  catalog: [],
  newBook: [],
  editBook: []
 };
}
export const initialState = getInitialState();

export const reducer = (state, action) => {
 switch (action.type) {

  case userActions.SET_CATALOG: {
   return {
    ...state,
    catalog: action.value
   };
  }

  case userActions.SET_NEWBOOK: {
   return {
    ...state,
    newBook: action.value
   };
  }

  case userActions.SET_EDITBOOK: {
   return {
    ...state,
    editBook: action.value
   };
  }

  default:
   return state;
 }
};


export const userContext = createContext({
 state: initialState,
 dispatch: null,
});

export const UserStore = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState);

 return <userContext.Provider value={{ state, dispatch }}>{children}</userContext.Provider>;
};

export const useUserContext = () => useContext(userContext);