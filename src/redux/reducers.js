import { combineReducers } from 'redux';
import { UserReducer }  from './user/reducer' ;

export const reducers = combineReducers ({
    User: UserReducer
})