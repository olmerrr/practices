import React from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import ShowWarning from "./ShowWarning";
import TodoList from "./TodoList";
const todoData = [
    {label:'Make tee',important: false,id: 0},
    {label:'Eat donats',important: false,id: 1},
    {label:'Read JS',important: false,id: 2}
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Clock/>
            </header>
            <Toggle/>
            <main>
                <ShowWarning/>
                <SubscribeForm/>
                <TodoList todos = {todoData}/>
            </main>
        </div>
    )
        ;
}

export default App;
