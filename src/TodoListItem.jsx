import React from "react";
import './TodoListItem.css'

export default class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false
    }
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };
    onMarkImportantClick = () => {
        this.setState( ({important}) => {
            return {
                important: !important
            }
        })
    };

    render() {

        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if(done){
            classNames = classNames + ' done'
        };
        if(important){
            classNames = classNames + ' important'
        };
        return (
            <div className={classNames}>

                <span
                    onClick={this.onLabelClick}
                    className="todo-list-item-label"
                >
                    {label}
                </span>

                    <button type="button"
                            className="btn btn-outline-success
                            btn-sm float-right"
                            onClick={this.onMarkImportantClick}
                    >
                        <i className="fa fa-exclamation"
                        />
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                    >
                        <i className="fa fa-trash-o"/>
                </button>
            </div>
        )
    }
}

