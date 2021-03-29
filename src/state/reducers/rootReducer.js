import {combineReducers} from 'redux'
import phoneReducer from './phonesReducer/phoneReducer'
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
    phone: phoneReducer,
    form: formReducer
})
export default rootReducer