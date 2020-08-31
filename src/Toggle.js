import React, {Component} from "react";
import './Toggle.css';

export default class Toggle extends Component {
    state = {
        isToggleOn: true
    }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="toggle-wrapp">
                <button onClick={this.handleClick}
                        className="btn btn-primary">
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

            </div>
        );
    }
}