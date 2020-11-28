const redux = require('redux');

const createStore = redux.createStore;
 
const buy_Book = "buy_Book";
const buy_pen="buy_pen"
const initialState={
    numberOfBooks : 10,
    // numberOfXyz = "abc"
    numberOfPens :15
}


// const action={
   
// }


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
const Reducer = (state=initialState,action)=>{
switch(action.type)
   {
       case "buy_Book":return{
           ...state,
           numberOfBooks:state.numberOfBooks-1
       }
       case "buy_pen":return{
           ...state,
           numberOfPens:state.numberOfPens-2
       }
       default: return state;
   } 
}


const store =  createStore(Reducer);
console.log("initial state",store.getState());
    const unsubscribe = store.subscribe(()=>{ console.log("updated state value",store.getState())})
store.dispatch(buyBook());
store.dispatch(buyPen());


unsubscribe()









