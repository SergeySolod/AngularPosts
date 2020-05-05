import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "./CovidCard";
import CovidLogo from '../images/image.png';

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
    }, []);
    return (
        <div className='container'>
            <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
            <div className='row'>
                <div className='col s12 m4'>
                    <CovidCard/>
                </div>
                <div className='col s12 m4'>
                    <CovidCard/>
                </div>
                <div className='col s12 m4'>
                    <CovidCard/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)