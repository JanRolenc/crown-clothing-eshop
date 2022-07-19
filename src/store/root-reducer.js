import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
<<<<<<< HEAD
import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
=======

export const rootReducer = combineReducers({
user: userReducer
>>>>>>> a9b4966461f58fdaf301c4ec7165a40d7152cf92
})