/* eslint-disable default-case */

// TEMP initial state, replace with {} & get data at login
const INITIAL_STATE = {
    userData: {
        id: 2,
        firstName: "Mustapha",
        lastName: "Durand",
        dob: "02-12-1980",
        height: 160,
        weight:57
        },
    loggedIn: true
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                userData: action.payload,
                loggedIn: true,
            };
        }

        case "LOGOUT": {
            const noUser = {};
            return {
                ...state,
                userData: noUser,
                loggedIn:false
            }
        }
    }
    return state;
}


