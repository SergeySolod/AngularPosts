import React, {useEffect} from 'react';
import M from "materialize-css";

const Dropdown = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);
        return(
            <div>
                <div className="input-field col s12">
                    <select>
                        <option value="" disabled selected>Выберите страну</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="5">Option 4</option>
                    </select>
                    <label>Materialize Select</label>
                </div>
            </div>
        )
}

export default Dropdown;