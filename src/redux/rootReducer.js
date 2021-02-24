import { combineReducers } from 'redux';
import {INCREMET, DECREMENT, CHANGE_THEME} from './types'

function counterReducer(state=0,action){

     switch (action.type) {
          case INCREMET:
               return state + 1;
          case DECREMENT:
               return state - 1;
          default:
               return state;
     }
}

let intialThemeState = {
     value : 'light'
}

function themeReducer(state = intialThemeState,action) {
     switch (action.type) {
          case CHANGE_THEME:
               return {...state, value: action.payload}
          default:
              return state;
     }
}

export const rootReducer = combineReducers({
     counter:counterReducer,
     theme:themeReducer
})