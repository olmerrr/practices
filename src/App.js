import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import ShowWarning from "./ShowWarning";
import TodoList from "./components/TodoList/TodoList";
import ItemAddForm from "./components/ItemAddForm/index";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink tee'),
            this.createTodoItem('Drink vodka'),
            this.createTodoItem('Create todo app')

        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx), //выреж от нуля до idx
                ...todoData.slice(idx + 1) // выреж после idx с шагом на 1
            ]
            return {
                todoData: newArray
            };
        });
    };
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        })
    };
    onToggleImportant = (id) => {
        console.log('Important', id)
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.find((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };
            const newArray = [
                ...todoData.slice(0, idx), //выреж от нуля до idx,
                newItem,
                ...todoData.slice(idx + 1) // выреж после idx с шагом на 1
            ]
            return {
                todoData: newArray
            };
        })
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
                        todos={this.state.todoData}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone}
                    />

                    <ItemAddForm
                        onItemAdded={this.addItem}
                    />
                </main>
            </div>
        )
    }
};

