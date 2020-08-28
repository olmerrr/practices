import React from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Clock/>
            </header>
            <main>
                <SubscribeForm/>
            </main>
        </div>
    );
}

export default App;
