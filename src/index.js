import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () =>{
    return(
        <BrowserRouter>
            <div>Home</div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

