import { combineReducers } from 'redux'

import cityselector from './cityselector'
import list from './list'
import item from './item'

export default combineReducers({
    cityselector,
    list,
    item
})