import React, {Component} from 'react';

export default class Clock extends Component {
    state = {
        date: new Date(),
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p>Точное время: {this.state.date.toLocaleTimeString()}</p>
    </div>
    );
    }
}

