import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CovidDropdown.module.css'

const CovidDropdown = (props) => {
    console.log(props.Countries)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => props.SetHandleCountryChange(e.target.value)}>
                <options value="global">Global</options>
                {props.Countries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    );
}

export default CovidDropdown