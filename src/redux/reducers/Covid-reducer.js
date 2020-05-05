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

const SetCovidData = covidData => ({
    type: SET_COVID_DATA,
    covidData
})

export const SetCovidDataThunk = () => {
    return async (dispatch, getState) => {
        let data = await CovidApi.FullStatistics()
        const covidData = {
            Infected: {
                title: 'Заразилось',
                value: data.confirmed.value,
                color: '#90caf9 blue lighten-3'
            },
            Recovered: {
                title: 'Вылечилось',
                value: data.recovered.value,
                color: '#a5d6a7 green lighten-3'
            },
            Deaths: {
                title: 'Умерло',
                value: data.deaths.value,
                color: '#ffab91 deep-orange lighten-3'
            },
            lastUpdate: data.lastUpdate
        }
        dispatch(SetCovidData(covidData));
    }
}

export default CovidReducer