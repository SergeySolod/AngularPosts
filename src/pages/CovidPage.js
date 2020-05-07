import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "../Components/CovidCard/CovidCard";
import CovidLogo from '../images/image.png';
import {getCountries, getCovidData, getCovidEveryDayData} from "../redux/selectors/Covide-selector";
import CovidChart from "../Components/CovidChart/CovidChart";
import CovidDropdown from "../Components/CovidDropdown/CovidDropdown";
import Grid from '@material-ui/core/Grid';
import styles from '../Components/CovidCard/CovidCard.module.css';

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
    }, []);

    if (props.CovidData.length === undefined) {
        return <div>Загрузка...</div>
    }
    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={3} className={styles.card}>
                    <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
                    <div>
                        {props.CovidData.map(data => <div className='col s12 m4'><CovidCard data={data}/></div>)}
                        {/*<Dropdown Countries={props.Countries}/>*/}
                        {/*<CovidChart data={props.CovidEveryDayData}/>*/}
                    </div>
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