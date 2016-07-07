import {
    GET_CITIES_SUCCESS,GET_CITY
} from '../constants/CitySelector'

export function getCities() {

    return (dispatch) => {
        $.get('http://localhost:3001/api/cities',(resp) => { // eslint-disable-line no-undef
            dispatch({
                type: GET_CITIES_SUCCESS,
                payload: resp.data
            })
        })
    }
}
export function getCity() {

    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: GET_CITY,
                payload: 2
            })
        }, 1000)
    }
}