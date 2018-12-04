import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

/* COMPONENTS */
import Home from './component/home';
import Artist from './component/artist';

const App = () =>(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/artist/:artistId' component={Artist}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

