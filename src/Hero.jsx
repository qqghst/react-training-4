import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        let name = 'dima1337';
        return (
            <div>
                <h1 className='h1'>Hello, my name is {name}.</h1>
            </div>
        )
    }
}
