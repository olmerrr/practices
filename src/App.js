import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import ShowWarning from "./ShowWarning";
import TodoList from "./components/TodoList/TodoList";
import ItemAddForm from "./components/ItemAddForm/index";
import SearchPanel from "./components/SearchPanel/SearchPanel";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink tee'),
            this.createTodoItem('Drink vodka'),
            this.createTodoItem('Create todo app')

        ],
        term: 'vod'
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
//[propName] передача динамически свойства
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }

        })
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    };

    render() {
        const {todoData, term} = this.state;
        const visibleItems = this.search(todoData, term);
        return (
            <div className="App">
                <header className="App-header">
                    <Clock/>
                </header>
                <Toggle/>
                <main>
                    <ShowWarning/>
                    <SubscribeForm/>
                    <SearchPanel/>
                    <TodoList
                        onDeleted={this.deleteItem}
                        todos={visibleItems}
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

