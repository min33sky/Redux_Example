import * as types from "../actions/ActionTypes";

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    /**
     *
     */

    switch (action.types) {
        case types.INCREMENT:
        // ...state : 기존 state값을 가져와서 ,다음 인수값을 덮어씌운다
            return { ...state,
                number: state.number + 1,
                dumbObject: {...state.dumbObject, u: 0}
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }

}
