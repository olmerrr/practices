import React from "react";
import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    render() {

        const {
            label, onDeleted,
            important,
            done,
            onToggleImportant,
            onToggleDone
        } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames = classNames + ' done'
        };
        if (important) {
            classNames = classNames + ' important'
        }
        ;
        return (
            <div className={classNames}>

                <span
                    onClick={onToggleDone}
                    className="todo-list-item-label"
                >
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success
                            btn-sm float-right"
                        onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"
                    />
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        )
    }
}

