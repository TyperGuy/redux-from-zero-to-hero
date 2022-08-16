const redux = require('redux');


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

const store = redux.createStore(reducer); 