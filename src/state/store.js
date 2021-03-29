import { createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

function saveToLocalStorage(state){
    try{
        const serialState = JSON.stringify(state)
        localStorage.setItem('state' , serialState)
    }catch(e){
        console.log(e)
    }
}

const store  = createStore(rootReducer, composeWithDevTools())

export default store;