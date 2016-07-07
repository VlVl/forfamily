import {
    GET_CITIES_SUCCESS, GET_CITY
} from '../constants/CitySelector'

const initialState = {
    selected : '1077',
    cities: [{name : 'Выберите ваш город', id : 0}]
}

export default function cityselector(state = initialState, action) {

    switch (action.type) {
        case GET_CITIES_SUCCESS:
                return { ...state, cities: action.payload }

        case GET_CITY:
                return { ...state, selected: action.payload }

        default:
            return state;
        }

}