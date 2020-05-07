export const getLoading = state => {
    return state.covid.loading;
};

export const getCovidData = state => {
    return state.covid.covidData;
};

export const getLastUpdate = state => {
    return state.covid.lastUpdate;
};

export const getCovidEveryDayData = state => {
    return state.covid.covidEveryDayData;
};

export const getCountries = state => {
    return state.covid.countries;
};