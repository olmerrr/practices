import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import ShowWarning from "./ShowWarning";
import TodoList from "./TodoList";

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            };
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Clock/>
                </header>
                <Toggle/>
                <main>
                    <ShowWarning/>
                    <SubscribeForm/>
                    <TodoList
                        onDeleted={this.deleteItem}
                        todos={this.state.todoData}/>
                </main>
            </div>
        )
    }
};

