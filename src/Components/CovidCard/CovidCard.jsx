import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './CovidCard.module.css'

const CovidCard = (props) => {
    return (
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.data.title}
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        staty={0}
                        end={props.data.value}
                        deration={2.5}
                        separator=','
                    />
                </Typography>
                <Typography color="textSecondary">
                    REAL DATE
                </Typography>
                <Typography variant="body2">
                    Number of active cases of COVID-19
                </Typography>
            </CardContent>
        </Grid>
    )
}

export default (CovidCard)