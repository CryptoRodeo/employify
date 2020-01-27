import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Loader extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="loader">LOADING</div>
        );
    }
}