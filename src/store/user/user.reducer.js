// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: "SET_CURRENT_USER",
// }//toto presuneme do user.types.js po zavedeni redux a tady importujeme

import { USER_ACTION_TYPES } from "./user.types"


const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
<<<<<<< HEAD

=======
    console.log('dispatched')
    console.log(action)
>>>>>>> a9b4966461f58fdaf301c4ec7165a40d7152cf92
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
    }
}