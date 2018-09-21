import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dayRate: 300,
            Hours: 8
        }

        this.setDayRate = this.setDayRate.bind(this);
        this.setHours = this.setHours.bind(this);
    }

    setDayRate(dayRate){
        this.setState({
            dayRate: dayRate
        });
    }

    setHours(hours){
        this.setState({
            Hours: hours
        });
    }

    render(){
        const rate = this.state.dayRate / this.state.Hours;

        return(
            <form>
                <NumberInput id="day-rate" label="Day Rate" min={0} max={5000} value={this.state.dayRate} onChange={this.setDayRate} />
                <NumberInput id="hours" label="Hours" min={1} max={12} value={this.state.Hours} onChange={this.setHours} />
                <hr/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        );
    }
}