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
        const description = (parser.parseFromString(job.description, 'text/html'));


        
        return (
            <div id="job_listing_container">
                <div id="job_listing_content">
                <Link to={{ pathname: "/"}}><i className="fas fa-chevron-circle-left"></i></Link>
                <h1>{job.title}</h1>
                <p>{job.company}</p>
                <p>{job.location}</p>
                    {ReactHtmlParser(description.body.innerHTML)}
                </div>
                <div id="job_listing_side_border">
                    <div id="job_application_container">
                        <h3>Interested? Apply Now</h3>
                        <img src={job.company_logo}/>
                        <div id="application_link">
                            <h2>Apply Here</h2>{ReactHtmlParser(job.how_to_apply)}
                        </div>
                    </div>
                </div>
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