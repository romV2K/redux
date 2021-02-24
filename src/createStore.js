export function createStore(counterReducer,initialState) {
     let state = counterReducer(initialState,{type:'__INIT__'} )
     const subscribers = []
     return {
          dispatch(action){
               state =  counterReducer(state,action)
               subscribers.forEach(sub=>sub())
          },
          subscribe(observer){
               subscribers.push(observer)
          },
          getState(){
               return state
          }
     }
}