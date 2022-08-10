const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake (){
  return{
    type : BUY_CAKE,
    info:'Now We are Buying a Cake'
  }
}
function buyIcecream (){
  return{
    type : BUY_ICECREAM,
    info:'Now We are Buying a IceCream'
  }
}

const initialState = {
  numOfCake : 10,
  numOfIceCream : 30
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCake:state.numOfCake-1
      }
    case BUY_ICECREAM:
      return{
        ...state,
        numOfIceCream:state.numOfIceCream-1
      }
    default: return state
  }
}


const store = createStore(reducer);
console.log('Initial State :' ,store.getState());
const unsubcribe = store.subscribe(()=> console.log('Updated State',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 

unsubcribe();