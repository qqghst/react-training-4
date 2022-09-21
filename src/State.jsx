import React, { Component } from 'react'

export default class State extends Component {
    state = {
        counter: 0
    };

    constructor(props) {
        super(props)

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    };

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    };
    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    };

    render() {
        return (
            <div className='state'>
                <h2 className='counter'>{this.state.counter}</h2>
                <div>
                    <button onClick={this.increment} className='plus'>+</button>
                    <button onClick={this.decrement} className='minus'>-</button>
                </div>
            </div>
        )
    }
}
