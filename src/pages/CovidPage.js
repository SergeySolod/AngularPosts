import React, {useEffect} from 'react'
import { connect } from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
        }, []);
    return (
        <div className='container'>

        </div>
    )
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)