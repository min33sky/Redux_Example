import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
}

export default function ui(state = initialState, action){
    /**
     * 액션 타입이 동일하다면 값을 변경하고
     * 다르면 상태를 변경하지 않는다.
     */
    if(action.type === types.SET_COLOR){
        return {
            color: action.color
        }
    }else{
        return state;
    }
}