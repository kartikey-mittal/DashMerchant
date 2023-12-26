// loginreducer.js

const initialState = {
        edit:{
                
        }
};
//
const loginReducer = (state = initialState, action) => {
        switch (action.type) {
                case "SET_MRP":
                        return {
                                ...state,
                                mrp: action.payload,
                        };
                case "SET_SP":
                        return {
                                ...state,
                                sp: action.payload,
                        };

                case "SET_WEIGHT":
                        return {
                                ...state,
                                weight: action.payload,
                        };

                default:
                        return state;
        }
};

export default loginReducer;
