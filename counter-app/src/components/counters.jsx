import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {

    render() {
        console.log('counters');

        const {onReset, counters, onDelete, onIncrement,onDecrement} = this.props;


        return (
            <div>

                <buttton
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    reset
                </buttton>

                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        /////////V
                        onDecrement={onDecrement}
                        /////A
                        counter={counter}
                    />
                ))}

            </div>);
    }
}

export default Counters;