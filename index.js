const {redux,createStore,applyMiddleware,combineReducers} = require('redux');

const buy_Book = "buy_Book";
const buy_pen="buy_pen"
const initialStateBooks={
    numberOfBooks : 10,
    
}

const initialStatePens={
    numberOfPens :15
}

// const applyMiddleware = redux.applyMiddleware;

//action creator
function buyBook(){
    return{ 
        //action
        type:buy_Book,
        payload : "My first redux code"
    }
}
function buyPen(){
    return{ 
        //action
        type:buy_pen,
        payload : "My Second Action"
    }
}

//reducer
const booksReducer = (state=initialStateBooks,action)=>{
switch(action.type)
   {
       case "buy_Book":return{
           ...state,
           numberOfBooks:state.numberOfBooks-1
       }
     
       default: return state;
   } 
}

const pensReducer = (state=initialStatePens,action)=>{
    switch(action.type)
       {
           case "buy_pen":return{
               ...state,
               numberOfPens:state.numberOfPens-2
           }
           default: return state;
       } 
    }
const reducer = combineReducers({
    book:booksReducer,
    pen:pensReducer});

//logger
const logger = store=>{
    return next=>{
        return action =>{
            const result = next(action);
            console.log("middleware log",result)
            return result;
        }
    }
}


const store =  createStore(reducer ,applyMiddleware(logger));
console.log("initial state",store.getState());
    const unsubscribe = store.subscribe(()=>{ console.log("updated state value",store.getState())})
store.dispatch(buyBook());
store.dispatch(buyPen());


unsubscribe()









