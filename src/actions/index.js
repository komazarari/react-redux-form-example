import fetch from 'isomorphic-fetch'

export const FETCH_MY_ITEMS = 'FETCH_MY_ITEMS'
export const FETCH_MY_ITEMS_SUCCESS = 'FETCH_MY_ITEMS_SUCCESS'
export const SELECT_MY_ITEM = 'SELECT_MY_ITEM'

function requestMyItems() {
  return {
    type: FETCH_MY_ITEMS
  }
}

function receiveMyItems(json) {
  return {
    type: FETCH_MY_ITEMS_SUCCESS,
    items: json
  }
}

export function fetchMyItems() {
  return dispatch => {
    dispatch(requestMyItems())
    return fetch('/my_items.json')
      .then(res => res.json())
      .then(json => dispatch(receiveMyItems(json)))
      .catch(err => console.log(err))
  }
}

export function selectMyItem(name) {
  return {
    type: SELECT_MY_ITEM,
    name
  }
}
