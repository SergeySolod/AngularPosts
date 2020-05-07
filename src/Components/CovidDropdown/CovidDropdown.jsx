import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CovidDropdown.module.css'

const CovidDropdown = (props) => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <options value="global">Global</options>
            </NativeSelect>
        </FormControl>
    );
}

export default CovidDropdown