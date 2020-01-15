import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


class JobListing extends Component
{
    constructor(props)
    {
        super(props);
    }

    handle_click(e)
    {
        let parent = document.querySelector("body")
        let child = document.querySelector("#job_listing_container");

        parent.remove(child);
        e.preventDefault();

    }

    renderListing()
    {
        //holds all job information
        const job = this.props.location.state.job;
        //parses text to html
        const parser = new DOMParser();
        //parsed html text
        const html = (parser.parseFromString(job.description, 'text/html'));


        
        return (
            <div id="job_listing_container">
                <a href="" id="go_back" onClick={(event) => {this.handle_click(event)}}>Go Back</a>
                <h1>{job.title}</h1>
                <p>{job.company}</p>
                <p>{job.location}</p>
                    {ReactHtmlParser(html.body.innerHTML)}
            </div>
        );
    }


    render()
    {
        // Renders this page outside the app container, allowing it to get full screen width & height
        return ReactDOM.createPortal(
                this.renderListing(),
                document.querySelector("body")
        )
    }
}

export default JobListing;