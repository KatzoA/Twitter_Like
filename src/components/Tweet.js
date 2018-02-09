import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        return (
            <div>
                <p className="tweet">{this.props.details.tweet}</p>
                <button type='button'>
                    <span role="img" aria-label="Up">yes</span>
                </button>
                {this.props.details.up}
                <button type='button'>
                    <span role="img" aria-label='Down'>No</span>
                </button>
                {this.props.details.down}
            </div>
        )
    }
}

export default Tweet