import {combineReducers} from 'redux'
import phoneReducer from './phonesReducer/phoneReducer'

const rootReducer = combineReducers({
    phone: phoneReducer
})
export default rootReducer