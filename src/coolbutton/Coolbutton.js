import React, { Component } from 'react'

export default class Coolbutton extends Component {
    render() {
        return (
            <div>
                <button class={this.props.class}>{this.props.text}</button>
               
            </div>
        )
    }
}



