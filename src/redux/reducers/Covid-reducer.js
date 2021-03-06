import {CovidApi} from '../../api/Covid.api'
import produce from "immer";

const SET_COVID_DATA = 'COVID-19/Covid-reducer/SET_COVID_DATA'
const SET_LAST_UPDATE = 'COVID-19/Covid-reducer/SET_LAST_UPDATE'
const SET_COVID_EVERY_DAY_DATA = 'COVID-19/Covid-reducer/SET_COVID_EVERY_DAY_DATA'
const SET_COUNTRIES = 'COVID-19/Covid-reducer/SET_COUNTRIES'
const SET_LOADING = 'COVID-19/Covid-reducer/SET_LOADING'

let initialState = {
    loading: false,
    covidData: [],
    lastUpdate: '',
    covidEveryDayData: [],
    countries: []
}

const CovidReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return produce(state, draft => {
                draft.loading = action.loading
            })
        }
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

const SetLoading = loading => ({
    type: SET_LOADING,
    loading
})

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
        dispatch(SetLoading(true));
        let data = await CovidApi.FullStatistics()
        const covidData = {
            data: [
                {
                    title: 'Confirmed',
                    value: data.confirmed.value

                },
                {
                    title: 'Recovered',
                    value: data.recovered.value
                },
                {
                    title: 'Deaths',
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

            arrayCountries.push(dataCountries.countries[i].name);
        }
        dispatch(SetCountries(arrayCountries));
        dispatch(SetLoading(false));
    }
}

export const SetHandleCountryChange = (country) => {
    return async (dispatch, getState) => {
        let data = await CovidApi.Country(country)
        const covidData = {
            data: [
                {
                    title: 'Confirmed',
                    value: data.confirmed.value

                },
                {
                    title: 'Recovered',
                    value: data.recovered.value
                },
                {
                    title: 'Deaths',
                    value: data.deaths.value,
                }
            ]
        }

        dispatch(SetCovidData(covidData.data));
        dispatch(SetLastUpdate(data.lastUpdate));

    }
}

export default CovidReducer