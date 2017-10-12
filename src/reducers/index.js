import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

/**
 * reducer들을 합쳐주는 함수
 */
const reducers = combineReducers({
    counter, ui
});

export default reducers;