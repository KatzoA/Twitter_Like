import React, { Component } from 'react';

class AddTweet extends Component {
    render() {
        return (
            <form className="AddPost">
                <input type="text" placeholder="Tweet" />
                <button type="submit">
                    GO
                </button>
            </form>
        )
    }
}

export default AddTweet