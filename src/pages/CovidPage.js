import React from 'react'
import styles from './CovidPage.module.css';
import CovidCard from "../Components/CovidCard/CovidCard";
import {Grid} from '@material-ui/core'
import {connect} from 'react-redux'

const CovidPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_card}>
                <Grid container spacing={3} justify='center'>
                    <CovidCard/>
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, {})(CovidPage)

{/*<Grid container spacing={2} justify="center">*/
}
{/*<Grid item xs={12} md={3} className={styles.card}>*/
}
{/*<div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>*/
}
{/*<div>*/
}
{/*{props.CovidData.map(data => <div className='col s12 m4'><CovidCard data={data}/></div>)}*/
}
{/*/!*<Dropdown Countries={props.Countries}/>*!/*/
}
{/*/!*<CovidChart data={props.CovidEveryDayData}/>*!/*/
}
{/*</div>*/
}
{/*</Grid>*/
}
{/*</Grid>*/
}