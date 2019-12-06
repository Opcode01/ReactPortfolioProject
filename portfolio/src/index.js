import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './Components/Jokes';
import App from './Components/App';
import Header from'./Components/Header';
import MusicMaster from './Projects/MusicMaster';

// This will inject the Element/Component in the index.html file at the div with the id tag of 'root' 
ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={() => <Header><App/></Header>}/>
        <Route path='/jokes' render={() => <Header><Jokes/></Header>}></Route>
        <Route path='/music-master' render={() => <Header><MusicMaster/></Header>} />
    </Switch>
</Router>,
document.getElementById('root'));
