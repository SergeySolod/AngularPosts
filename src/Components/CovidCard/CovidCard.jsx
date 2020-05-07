import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'

import styles from './CovidCard.module.css'

const CovidCard = (props) => {
    return (
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Infected
                </Typography>
                <Typography variant="h5">
                    REAL DATE
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

export default connect(CovidCard)