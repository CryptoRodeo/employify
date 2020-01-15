import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component
{
    render()
    {
        return (
        <nav>
            <div id="link-container">
                <Link to="/" className="link nav-link"><i className="fas fa-horse-head"></i></Link>
            </div>
        </nav>
        );
    }
}