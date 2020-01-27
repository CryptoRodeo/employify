import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';


var axios = require('axios');


class JobListings extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="job-listing">
                
                <ul>
                    {
                        this.props.data.map( (job , x) => (
                                <li key={x}>
                                    <div className="listing-container">
                                        <div className="listing-title">
                                            <h4>
                                            <Link to={{
                                                pathname: "/listing",
                                                state:{
                                                    job: job
                                                }
                                                }}>{job.title}</Link>
                                            </h4>
                                            <p>{job.company} </p>
                                        </div>
                                        <div className="listing-meta-data">
                                        <span>
                                            {job.location}
                                        </span>
                                        <span>
                                            {job.type}
                                        </span>
                                        </div>
                                    </div>
                                </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default JobListings;