import React from 'react'
import styles from './CovidPage.module.css';
import CovidCard from "../Components/CovidCard/CovidCard";

const CovidPage = () => {
    return (
     <div className={styles.container}>
       <CovidCard/>
     </div>
    )
}


export default (CovidPage)

{/*<Grid container spacing={2} justify="center">*/}
{/*<Grid item xs={12} md={3} className={styles.card}>*/}
{/*<div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>*/}
{/*<div>*/}
{/*{props.CovidData.map(data => <div className='col s12 m4'><CovidCard data={data}/></div>)}*/}
{/*/!*<Dropdown Countries={props.Countries}/>*!/*/}
{/*/!*<CovidChart data={props.CovidEveryDayData}/>*!/*/}
{/*</div>*/}
{/*</Grid>*/}
{/*</Grid>*/}