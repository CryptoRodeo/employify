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

    renderListing()
    {
        const job = this.props.location.state.job;
        const parser = new DOMParser();
        const html = (parser.parseFromString(job.description, 'text/html'));
        console.log(html);


        return (
            <div id="job_listing_container">
                <h1>{job.title}</h1>
                <p>{job.company}</p>
                <p>{job.location}</p>
                    {ReactHtmlParser(html.body.innerHTML)}
            </div>
        );
    }


    render()
    {
        return(
                this.renderListing()
        )
    }
}

export default JobListing;