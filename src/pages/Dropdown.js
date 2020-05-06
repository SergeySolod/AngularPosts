import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';

const Dropdown = (props) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={3}>
                <Autocomplete
                    id="combo-box-demo"
                    options={props.Countries}
                    getOptionLabel={(option) => option.country}
                    style={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                />
            </Grid>
        </Grid>
    );
}

export default Dropdown