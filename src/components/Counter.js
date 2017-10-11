import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Value from "./Value";
import Control from "./Control";


const propTypes = {

};

const defaultProps = {

};

/**
 * Smart Component
 * -> Redux와 직접 소통하며 DOM을 직접 다루지 않고
 * -> Dumb Component에게 위임한다
 */
class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}


Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;


export default Counter;