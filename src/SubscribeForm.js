import React from "react";

const SubscribeForm = (e) => {
    function handleClick(e) {
        e.preventDefault();
        console.log('По ссылке кликнули.');
    }
   return( <form onClick={ () => console.log('form')}>
        <input type="text"
        placeholder="Your e-mail"/>
        <button onClick={handleClick}>
            Subscribe</button>
    </form>
   )};
export default  SubscribeForm;