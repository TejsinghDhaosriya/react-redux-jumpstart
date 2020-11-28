const redux = require('redux');

const createStore = redux.createStore;
 
const buy_Book = "buy_Book";
const initialState={
    numberOfBooks : 10,
    // numberOfXyz = "abc"
}


// const action={
   
// }


//dispatch and action
function buyBook(){
    return{
        type:buy_Book,
        info : "My first redux code"
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
       default: return state;
   } 
}


const store =  createStore(Reducer);
console.log("initial state",store.getState());
    const unsubscribe = store.subscribe(()=>{ console.log("updated state value",store.getState())})
store.dispatch(buyBook());


unsubscribe()