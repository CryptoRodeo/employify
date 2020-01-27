import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import Loader from "./loader";

import JobForm from "./job-form";
import JobListings from "./job-listings";

import SearchResults from "./search_results";

export default class AppContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            job_description: "Filter by title, benefits, companies, expertise",
            location_description: "Filter by city, state, zip code or country",
            job_description_filter:'',
            location_filter:'',
            job_listings: [],
            is_awaiting_results:'',
        };
        this.handleJobFilter = this.handleJobFilter.bind(this);
        this.handleLocationFilter = this.handleLocationFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.returnListing = this.returnListing.bind(this);
    }

    handleJobFilter(e)
    {
        this.setState({job_description_filter: e.target.value});
    }

    handleLocationFilter(e)
    {
        this.setState({location_filter: e.target.value});
    }

    handleSubmit(e)
    {

        let jobs = [];

        let filters = {
            description: this.state.job_description_filter,
            location: this.state.location_filter
        };
        /**
            Refactor this section:

            - redo with async and await to render a loader while the api is still being retrieved.
        */
        axios.get(`http://localhost:8080/api?description=${filters.description}&location=${filters.location}`)
        .then((job_listings) => {
            this.setState({is_awaiting_results: true});
            return job_listings;
        })
        .then((job_listings) => this.setState({job_listings: job_listings.data}))
        .then( () => 
            {
                if(this.state.job_listings.length > 0)
                {
                    this.setState({is_awaiting_results: false});
                }
            }
        );
        e.preventDefault();
    }

    returnListing(event, job)
    {
        event.preventDefault(); //prevent link from being clicked by default
        console.log(job);
    }

    
    render()
    {
        return(

            <div>
            <JobForm
                job_description={this.state.job_description}
                location_description={this.state.location_description}
                jobFilter={this.state.job_description_filter}
                locationFilter={this.state.location_filter}
                handleSubmit={this.handleSubmit}
                handleJobFilter={this.handleJobFilter}
                handleLocationFilter={this.handleLocationFilter}
            />
            <SearchResults
                is_awaiting_results={this.state.is_awaiting_results}
                data={this.state.job_listings}
            />

            </div>
            
        )
    }
}