import {
        GET_ITEM,
        GET_ITEM_SUCCESS,
        GET_ITEM_ERROR,
        GET_WEEK
} from '../constants/Item'

const initialState = {
    item: null,
    isLoaded : false,
    error_text : 'wait'
}

export default function get_item(state = initialState, action) {

    switch (action.type) {
        case GET_ITEM:
            return { ...state, isLoaded : true, error_text : 'wait' }
    case GET_ITEM_SUCCESS:
        return { ...state, item: action.payload, isLoaded : true, error_text : false }
    case GET_ITEM_ERROR:
        return { ...state, isLoaded : true, error_text : action.payload }
    case GET_WEEK:
        return { ...state, week_events : action.payload}

    default :
        return state;
}

}