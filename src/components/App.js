import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from '../firebase';

class App extends Component {
    constructor() {
        super()
        firebase.initializeApp(config)
    }

    componentWillMount() {
        // juste avant que le component soit monté
        const tweetRef = firebase.database().ref('tweets')
        tweetRef.on('value', snapshot => {
            this.setState({
                //state = les données qu'il y a dans le component
                tweets: snapshot.val()
            })
        })
    }
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}
export default App