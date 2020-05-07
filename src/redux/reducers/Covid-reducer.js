import {CovidApi} from '../../api/Covid.api'
import produce from "immer";

const SET_COVID_DATA = 'COVID-19/Covid-reducer/SET_COVID_DATA'
const SET_LAST_UPDATE = 'COVID-19/Covid-reducer/SET_LAST_UPDATE'
const SET_COVID_EVERY_DAY_DATA = 'COVID-19/Covid-reducer/SET_COVID_EVERY_DAY_DATA'
const SET_COUNTRIES = 'COVID-19/Covid-reducer/SET_COUNTRIES'

let initialState = {
    covidData: [],
    lastUpdate: '',
    covidEveryDayData: [],
    countries: []
}

const CovidReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COVID_DATA: {
            return produce(state, draft => {
                draft.covidData = action.covidData
            })
        }
        case SET_COVID_EVERY_DAY_DATA: {
            return produce(state, draft => {
                draft.covidEveryDayData = action.covidEveryDayData
            })
        }
        case SET_COUNTRIES: {
            return produce(state, draft => {
                draft.countries = action.countries
            })
        }
        case SET_LAST_UPDATE: {
            return produce(state, draft => {
                draft.lastUpdate = action.lastUpdate
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

const SetCovidEveryDayData = covidEveryDayData => ({
    type: SET_COVID_EVERY_DAY_DATA,
    covidEveryDayData
})

const SetCountries = countries => ({
    type: SET_COUNTRIES,
    countries
})


const SetLastUpdate = lastUpdate => ({
    type: SET_LAST_UPDATE,
    lastUpdate
})

export const SetCovidDataThunk = () => {
    return async (dispatch, getState) => {
        let data = await CovidApi.FullStatistics()
        const covidData = {
            data: [
                {
                    title: 'Заразилось',
                    value: data.confirmed.value

                },
                {
                    title: 'Вылечилось',
                    value: data.recovered.value
                },
                {
                    title: 'Умерло',
                    value: data.deaths.value,
                }
            ]
        }

        dispatch(SetCovidData(covidData.data));
        dispatch(SetLastUpdate(data.lastUpdate));

        let dataEveryDay = await CovidApi.EveryDayStatistics()
        let arrayCovidEveryDay = [];
        for (let i = 0; i < dataEveryDay.length; i++) {
            let covidOneDay = {
                date: dataEveryDay[i].reportDate,
                confirmed: dataEveryDay[i].confirmed.total,
                deaths: dataEveryDay[i].deaths.total
            }

                arrayCovidEveryDay.push(covidOneDay);
        }
        dispatch(SetCovidEveryDayData(arrayCovidEveryDay));

        let dataCountries = await CovidApi.Countries()

        let arrayCountries = [];
        for (let i = 0; i < dataCountries.countries.length; i++) {
            let counrty = {
            country: dataCountries.countries[i].name
            }
            arrayCountries.push(counrty);
        }
        dispatch(SetCountries(arrayCountries));

    }
}

export default CovidReducer