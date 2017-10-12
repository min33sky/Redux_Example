import React, { Component } from 'react';
import Value from "./Value";
import Control from "./Control";
// import { connect, bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

/**
 * Smart Component
 * -> Redux와 직접 소통하며 DOM을 직접 다루지 않고
 * -> Dumb Component에게 위임한다
 */
class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ]

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},  ${color[1]}, ${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizedColor={this.setRandomColor}
                />
            </div>
        );
    }
}

/**
 * Redux State에 있는것을 이 컴포넌트의 Props로 매핑해준다
 * @param {*} state
 */
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

/**
 * Dispatch해주는 함수를 Props로 매핑해준다.
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}

// Counter 컴포넌트를 Redux에 연결
export default connect(mapStateToProps, mapDispatchToProps)(Counter);