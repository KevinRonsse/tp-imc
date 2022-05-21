/* eslint-disable default-case */
const INITIAL_STATE = {
    imcData: [],
    updated: false
};

export default function imcReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOADIMC": {
            return {
                ...state,
                imcData: action.payload,
                updated: true
            };
        }

        case "ADDIMC": {
                const newData = [...state.imcData];
                newData.unshift(action.payload)
                return {
                    ...state,
                    imcData: newData,
                    updated: true
                }
        }
 
        case "CLEARDATA": {
                const newData = [];
                return {
                    ...state,
                    imcData: newData,
                }
        }
    }
    return state;
}


