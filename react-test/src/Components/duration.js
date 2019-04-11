import React, { Component } from 'react';
import { Slider } from 'antd';

const marks = {
    0: '1 to 3 Days',
    25: '4 to 6 Days',
    50: '7 to 9 Days',
    75: '10 to 12 Days',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>13 Days or More</strong>,
    },
};

class Duration extends Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked area', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (
            <div style={{marginLeft: '140px', marginRight: '140px'}}>
                <h4>Duration</h4>
                <Slider marks={marks} step={null} defaultValue={0} />
            </div >
        );
    }
}

export default Duration;


