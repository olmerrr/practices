import React from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import ShowWarning from "./ShowWarning";
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
            </main>
        </div>
    );
}

export default App;
