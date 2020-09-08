import React from "react";
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
    state = {
        term: ''
    };
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {

        return (
            <input type="text"
                   placeholder="Search"
                   className="search-input form-control"
                   value={this.state.term}
                   onChange={this.onSearchChange}
            />
        )

    }
}
