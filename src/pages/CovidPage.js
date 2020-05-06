import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "./CovidCard";
import CovidLogo from '../images/image.png';
import {getCountries, getCovidData, getCovidEveryDayData} from "../redux/selectors/Covide-selector";
import CovidChart from "./CovidChart";
import Dropdown from "./Dropdown";
import Grid from '@material-ui/core/Grid';

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
    }, []);

    if (props.CovidData.length === undefined) {
        return <div>Загрузка...</div>
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
                    <div>
                        {props.CovidData.map(data => <div className='col s12 m4'><CovidCard data={data}/></div>)}
                        <Dropdown Countries={props.Countries}/>
                        <CovidChart data={props.CovidEveryDayData}/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        CovidData: getCovidData(state),
        CovidEveryDayData: getCovidEveryDayData(state),
        Countries: getCountries(state)
    };
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)