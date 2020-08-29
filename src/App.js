import React from 'react';
import './App.css';
import Clock from "./Clock";
import SubscribeForm from './SubscribeForm';
import Toggle from "./Toggle";
import Greeting from "./Greeting";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting isLoggedIn = {true}/>
                <Clock/>
                <Toggle/>
            </header>
            <main>
                <SubscribeForm/>
            </main>
        </div>
    );
}

export default App;
