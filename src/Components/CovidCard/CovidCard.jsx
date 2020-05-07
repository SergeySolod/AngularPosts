import React from 'react'
import {Card, CardComponent, Typography, Grid} from '@material-ui/core'

import styles from './CovidCard.module.css'

const CovidCard = (props) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                Hello
            </Grid>
        </div>
    )
}

export default CovidCard