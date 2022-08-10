const redux = require('redux');
const reduxLogger = require('redux-logger');




const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMeddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


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

const initialCakeState = {
  numOfCake : 10
}

const initialIceCreamState = {
  numOfIceCream : 40
}
const cakeReducer = (state = initialCakeState, action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCake:state.numOfCake-1
      }
    default: return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfIceCream:state.numOfIceCream-1
      }
    default: return state
  }
}



const rootReducer = combineReducers({
  'cake':cakeReducer,
  'inceCream':iceCreamReducer
})

const store = createStore(rootReducer,applyMeddleWare(logger));
console.log('Initial State :' ,store.getState());
const unsubcribe = store.subscribe(()=> {});
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 
store.dispatch(buyCake());
store.dispatch(buyIcecream()); 

unsubcribe();