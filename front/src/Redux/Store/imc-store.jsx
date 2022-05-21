import {configureStore}  from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import imcReducer from "../Reducer/imc-reducer";
import userReducer from "../Reducer/user-reducer";


const rootReducer = combineReducers ({
    imcReducer, userReducer
})
export const imcStore = configureStore({reducer: rootReducer});

