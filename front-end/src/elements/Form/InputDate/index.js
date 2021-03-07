import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {

    const {value, placeholder, name, min, max, prefix, suffix} = props;
    const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

    const onChange = e => {
        let value = String(e.target.value);
        if (prefix) value = value.replace(prefix);
        
    }


    return (
        <div>
            
        </div>
    )
}

Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
};

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChane: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
};