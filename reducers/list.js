import {
        GET_LIST,
        GET_LIST_SUCCESS,
        GET_LIST_ERROR
} from '../constants/List'

const initialState = {
    items: [],
    isLoaded : false,
    error_text : "wait"
}

export default function get_list(state = initialState, action) {

    switch (action.type) {
        case GET_LIST:
            return { ...state, isLoaded : true, error_text : "wait" }
        case GET_LIST_SUCCESS:
            return { ...state, items: action.payload, isLoaded : true, error_text : false }
        case GET_LIST_ERROR:
            return { ...state, isLoaded : true, error_text : action.payload }

        default :
            return state;
    }

}