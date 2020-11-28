const {applyMiddleware,createStore} =require('redux');
const thunkMiddlewre = require('redux-thunk').default;
const axios = require('axios');

const intialState   ={
    loading : false,
    users :[],
    error:''
}


const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR';

function userRequest(){
    return {
        type:USER_REQUEST
    }
}

const userSuccess=(users)=>{
    return{
        type:USER_SUCCESS,
        payload:users
    }
}

const userError=(error)=>{
    return{
        type:USER_ERROR,
        payload:error
    }
}

const reducer = (state=intialState,action)=>{
    switch(action.type){
        case "USER_REQUEST":return{
            ...state,
            loading : true
        }
        case "USER_SUCCESS":return{
            loading : false,
            users:action.payload,
            error:''
        }
        case "USER_ERROR":return{
            loading : false,
            users:[],
            error:action.payload
        }
    }
}


const fetchUser=()=>{
    return function(dispatch){
        dispatch(userRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //response .data
        const users = response.data.map(user=>user.name)
        dispatch(userSuccess(users));

        })
        .catch(error=>{
            //error.msg
dispatch(userError(error.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddlewre));



store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(fetchUser());
