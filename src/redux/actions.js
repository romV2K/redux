import {INCREMET, DECREMENT, CHANGE_THEME} from "./types";

export let increment= ()=> ({type: INCREMET});
export let decrement= ()=> ({type: DECREMENT});

export let asyncIncrement = ()=> {
     return dispatch => {
          setTimeout(() => {
               dispatch(increment())
          }, 1500);
     }
}
export let changeTheme = (newTheme)=> ({
     type: CHANGE_THEME,
     payload: newTheme
})