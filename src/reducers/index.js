import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as actions from '../actions'

function app(state = {}, action) {
  switch (action.type) {
  case actions.FETCH_MY_ITEMS:
  case actions.FETCH_MY_ITEMS_SUCCESS:
    return { ...state,
             myItems: myItems(state.myItems, action)
           }
  default:
    return state;
  }
}

function myItems(state, action) {
  switch (action.type) {
  case actions.FETCH_MY_ITEMS:
    return { ...state, isFetching: true }
  case actions.FETCH_MY_ITEMS_SUCCESS:
    return { ...state, isFetching: false, data: action.items }
  case actions.SHOW_MY_ITEM:
    return { ...state,
             data: state.data.map(
               (i) => {
                 if (action.name == i.name) {
                   return { ...i, isSelected: true }
                 } else {
                   return { ...i, isSelected: false}
                 }
               }
             )
           }
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  app
})

export default rootReducer
