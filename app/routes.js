import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import LogIn from './containers/LogIn';
import UserData from './containers/UserData';
window.isLoggedIn = localStorage.getItem('isLoggedIn');

export default (store) => {
    return (<Route path="/" component={App}>
        <IndexRoute component={window.isLoggedIn ? UserData : LogIn} />
        <Route path="/filtertable" onEnter={(s1, s2) => { console.log('hii', store, s1, s2);}} component={FilterableTable} />
        <Route path="/userdata" component={UserData} />
        <Route path="/about" component={About} />
    </Route>);
};
