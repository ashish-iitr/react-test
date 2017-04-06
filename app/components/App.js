import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';
import { mainContent } from '../styles/mainContent.scss';

const App = ({ children }) =>
    <div className={mainContent}>
        {/* <h1>Filter table</h1>*/}
        { children }
        { window.isLoggedIn ? (
            <footer className={footer}>
            <Link to="/userdata">UserData</Link>
            <Link to="/filtertable">Filterable Table</Link>
            <Link to="/about">About</Link>
            </footer>
        ) :
        <div></div>
    }

    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
