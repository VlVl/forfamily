import {
    GET_ITEM,
    GET_ITEM_SUCCESS,
    GET_ITEM_ERROR,
    GET_WEEK
} from '../constants/Item'

export function getItem(url) {
    return (dispatch) => {
        dispatch({
            type: GET_ITEM,
            payload : false
        })
        $.get('http://localhost:3001' + url,(resp) => { // eslint-disable-line no-undef
            if(resp.item){
                resp.data.pop()
                dispatch({
                    type: GET_ITEM_SUCCESS,
                    payload: resp
                })
            }else{
                dispatch({
                    type: GET_ITEM_ERROR,
                    payload: resp.html
                })
            }
        })
    }
}
export function getWeekEvents() {
    return (dispatch) => {
        $.get('http://localhost:3001/api/events',(resp) => { // eslint-disable-line no-undef
            if(resp.data){
                resp.data.pop()
                dispatch({
                    type: GET_WEEK,
                    payload: resp.data
                })
            }else{
                dispatch({
                    type: GET_WEEK,
                    payload: []
                })
            }
        })
    }
}