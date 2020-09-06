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
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //    1 update obj
            const oldItem = todoData[idx]; // todoData[idx] one click one lable
            const newItem = {...oldItem, done: !oldItem.done} //создаем копию обьекта с !done
            //    2 construct new arr

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1) // выреж после idx с шагом на 1
            ]
            return{
                todoData: newArray
            }
        })
    };
    onToggleImportant = (id) => {
        console.log('Important', id)
    };

    render() {
        const doneCount = this.state.todoData
            .filter( (el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
//this.state.todoData - весь массив данных
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

