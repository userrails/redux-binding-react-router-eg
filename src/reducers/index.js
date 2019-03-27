import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as reduxFormReducer } from "redux-form";

const rootReducer = (history) => combineReducers({
  form: reduxFormReducer,
  router: connectRouter(history)
})

export default rootReducer
