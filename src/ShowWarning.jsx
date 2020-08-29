import React, {Component} from "react";
import  './ShowWarning.css';
function WarningBanner(props){
    if(!props.warn){
        return null
    };
    return (
        <div className="warning">
            Warning!!
        </div>
    )
}
export  default class Page extends Component {
    state = {
        showWarning: false
    }
    handleToggleClick = () =>  {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}


