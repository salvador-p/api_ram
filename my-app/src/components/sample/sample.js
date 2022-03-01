import React from "react";
import "./sample.css"

const Sample = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <H3>{props.message}</H3>
            <p>made with react</p>
        </React.Fragment>
    );
};

export default Sample;