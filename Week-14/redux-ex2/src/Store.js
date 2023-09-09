import { createStore } from 'redux';

const store = createStore((state = 0, action)=>{
  switch(action.type) {
    case 'ADD_STEP': return  state + 1;
    case 'RESET_STEP': return 0;
    default: return state
  }
})

export default store;