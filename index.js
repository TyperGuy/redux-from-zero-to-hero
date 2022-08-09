const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';


function buyCake (){
  return{
    type : BUY_CAKE,
    info:'Now We are Guying a Cake'
  }
}

const initialState = {
  numOfCake : 10
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCake:state.numOfCake-1
      }
    default: return state
  }
}


const store = createStore(reducer);
console.log('Initial State :' ,store.getState());
const unsubcribe = store.subscribe(()=> console.log('Updated State',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubcribe();