import { applyMiddleware, createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
// 1- create store
// middlewre :center bin action et reducer
// thunk : kat3wed async await
// 1-Middleware  partie 1
export const store = createStore(moviesReducer,applyMiddleware(thunk))