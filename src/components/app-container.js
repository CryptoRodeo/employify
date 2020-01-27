import React, {Component} from 'react';
import axios from 'axios';

import JobForm from "./job-form";
import JobListings from "./job-listings";

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
            job_listings: []
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
            console.log("loading...");
            return job_listings;
        })
        .then((job_listings) => this.setState({job_listings: job_listings.data}))
        .then(() => console.log("query completed"));


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

            <JobListings data={this.state.job_listings} returnListing={this.returnListing} />
            </div>
        )
    }
}