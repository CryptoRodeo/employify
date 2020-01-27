import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Loader extends Component
{
    constructor(props)
    {
        super(props);
    }
    render_loader()
    {
        return(
            <div class="loader"></div>
        );
    }

    remove_loader()
    {
        let loader = document.querySelector('.loader');
        loader.parentElement.removeChild(loader);
    }

    render()
    {
        return(
            this.render_loader()
        )
    }
}