import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';

export default class Tester extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div id="test">   
                {this.props.loader};
            </div>
        );
    }
    
}