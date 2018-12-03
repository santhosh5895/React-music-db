import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

/* COMPONENTS */
import Home from './component/home';
import Artists from './component/artists';

const App = () =>(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/artists/:artistId' component={Artists}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

