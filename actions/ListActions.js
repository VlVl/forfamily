import {
    GET_LIST,
    GET_LIST_SUCCESS,
    GET_LIST_ERROR
} from '../constants/List'

export function getList(url) {
    console.log('http://localhost:3001' + url)
    return (dispatch) => {
        dispatch({
            type: GET_LIST,
            payload : false
        })
        $.get('http://localhost:3001' + url,(resp) => { // eslint-disable-line no-undef
            if(resp.data && resp.data.length > 1){
                resp.data.pop()
                dispatch({
                    type: GET_LIST_SUCCESS,
                    payload: resp.data
                })
            }else{
                dispatch({
                    type: GET_LIST_ERROR,
                    payload: resp.html
                })
            }
        })
    }
}