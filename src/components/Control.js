import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizedColor: PropTypes.func
};

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizedColor: createWarning('onRandomizedColor')
};

function createWarning(funcName){
    return () => console.warn(funcName + ' is not defined.');
};

/**
 * Dumb Component
 * -> Redux와 소통하지 않고 Smart Component에게
 * -> Props를 전달받아 DOM을 구성한다.
 */
class Control extends Component {



    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizedColor}>Randomize Color</button>
            </div>
        );
    }
}


Control.propTypes = propTypes;
Control.defaultProps = defaultProps;


export default Control;