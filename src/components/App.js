import React, { Component } from 'react';
// importe firebase
import * as firebase from 'firebase';
import config from '../firebase';
// importe component
import Tweet from './Tweet';
import AddTweet from './AddTweet';
import Loading from './Loading';

class App extends Component {
    constructor() {
        super()
        this.state = {
            load: true
        }
        firebase.initializeApp(config)
    }

    componentWillMount() {
        // juste avant que le component soit monté
        const tweetRef = firebase.database().ref('tweets')

        setTimeout(() => {
            tweetRef.on('value', snapshot => {
                this.setState({
                    //state = les données qu'il y a dans le component
                    tweets: snapshot.val(),
                    load: false
                })
            })
        }, 3000)
    }
    render() {
        if (this.state.load) {
            return (
                <Loading />
            )
        }
        return (
            <div className="app">
                <AddTweet />
                <div className="tweet">
                    <Tweet />
                </div>
            </div>
        )
    }
}
export default App