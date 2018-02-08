import React, { Component } from 'react';

class AddTweet extends Component {
    state = {
        tweet: ''
    }

    handleChange = (e) => {
        this.setState({
            tweet: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTweet(this.state.tweet)
        this.setState({
            tweet: ''
        })
    }



    render() {
        return (
            <form className="AddPost" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Tweet" onChange={this.handleChange} value={this.state.tweet} />
                <button type="submit">
                    GO
                </button>
            </form>
        )
    }
}


export default AddTweet