import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../utils/actions";

import reducer from "../utils/reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading:true
};

const[state,dispatch]=useReducer(reducer,initialState)
const fetchStories = async()=>{

  dispatch({type:SET_LOADING})
}

useEffect(()=>{

fetchStories()
},[])

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  
  return <AppContext.Provider value={...state}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
