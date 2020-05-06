import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "./CovidCard";
import CovidLogo from '../images/image.png';
import {getCountries, getCovidData, getCovidEveryDayData} from "../redux/selectors/Covide-selector";
import CovidChart from "./CovidChart";
import M from 'materialize-css';
import Dropdown from "./Dropdown";

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
    }, []);

    if (props.CovidData.length === undefined) {
        return <div>Загрузка...</div>
    }
    return (
        <div className='container'>
            <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
            <div className='row'>
                {props.CovidData.map(data => <div className='col s12 m4'><CovidCard data={data}/></div>)}
                <Dropdown Countries={props.Countries}/>
                <CovidChart data={props.CovidEveryDayData}/>
            </div>
        </div>
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