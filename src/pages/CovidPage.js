import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "./CovidCard";
import CovidLogo from '../images/image.png';
import {getCovidData, getCovidEveryDayData} from "../redux/selectors/Covide-selector";
import CovidChart from "./CovidChart";
import M from 'materialize-css';
import SuperCoolComponent from "./Foo";

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()

        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }, []);

    if (props.CovidData.length === undefined) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='container'>
            <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
            <div className='row'>
                {
                    props.CovidData.map(data =>
                        <div className='col s12 m4'>
                            <CovidCard data={data} />
                        </div>
                    )
                }



                   <SuperCoolComponent />


                <CovidChart data={props.CovidEveryDayData} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        CovidData: getCovidData(state),
        CovidEveryDayData: getCovidEveryDayData(state)
    };
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)