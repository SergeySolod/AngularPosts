import {CovidApi} from '../../api/Covid.api'
import produce from "immer";

const SET_COVID_DATA = 'COVID-19/Covid-reducer/SET_COVID_DATA'

let initialState = {
    covidData: {}
}

const CovidReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COVID_DATA: {

        }
        default:
            return state
    }
}