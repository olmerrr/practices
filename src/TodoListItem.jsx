import React from "react";

export default class TodoListItem extends React.Component {
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`)
    };
    render() {
        const {label, important = false} = this.props;
        const style = {
            color: important ? 'tomato' : 'black'
        };
        return(
            <div style = {style}
                 onClick = {this.onLabelClick}
            >{label}</div>
        )
    }
}

