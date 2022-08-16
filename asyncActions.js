const redux = require('redux');
const createStore = redux.createStore;
const applyMiddlWere = redux.applyMiddleware;
const thunkMiddleWere = require('redux-thunk').default;

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const axios = require('axios');

const initialState  = {
  loading : false,
  users : [],
  error :'',
}


const FETCH_USER_REQUEST = 'FETCH USER REQUEST';
const FETCH_USER_SUCESSFULL = 'FETCH USER SUCESSFULL';
const FETCH_USER_ERROR = 'FETCG USER ERROR';


const fetchUserRequest = ()=>{

  return{
    type : FETCH_USER_REQUEST
  }
}

const fetchUserSucess = users=>{

  return{
    type : FETCH_USER_SUCESSFULL,
    payLoad : users
  }
}

const fetchUserError = error=>{

  return{
    type : FETCH_USER_ERROR,
    payLoad : error

  }
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case FETCH_USER_REQUEST :
      return{
        ...state,
        loading:true
      }
    case FETCH_USER_SUCESSFULL :
      return{
        loading:false,
        users : action.payLoad,
        error : ''
      }
    case FETCH_USER_ERROR :
      return{
        loading:false,
        user : [],
        error : action.payLoad
      }
  }
}


const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios.get(BASE_URL)
    .then(
      response =>{
        const users = response.data.map(user => user.id);
        dispatch(fetchUserSucess(users))
      }
    )
    .catch(
      error =>{
        dispatch(fetchUserError(error.message));
      }
    )
  }
}

const store = createStore(reducer,applyMiddlWere(thunkMiddleWere)); 
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());