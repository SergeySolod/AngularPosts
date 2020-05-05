import {CovidApi} from '../../api/Covid.api'
import produce from "immer";

const SET_COVID_DATA = 'COVID-19/Covid-reducer/SET_COVID_DATA'

let initialState = {
    covidData: {}
}

const CovidReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COVID_DATA: {
            return produce(state, draft => {
                draft.covidData = action.covidData
            })
        }
        default:
            return state
    }
}

export const SetCovidDataThunk = () => {
    return async (dispatch, getState) => {
        let data = await CovidApi.FullStatistics()
        console.log(data)
    }
}

export default CovidReducer