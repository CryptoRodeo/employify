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
            render_loader: false,
            has_results: false
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



    async getResults(filters)
    {

        if(filters.description && filters.location)
        {
            try {
                await fetch(`http://localhost:8080/api?description=${filters.description}&location=${filters.location}`)
                .then((job_listings) => {
                    this.setState({render_loader: true});
                    return (job_listings.json());
                })
                .then((jobs) => {
                    if(jobs.length > 0)
                    {
                        this.setState({job_listings: jobs});
                        this.setState({render_loader: false});
                    }
                    else
                    {

                    }
                });
            }
            catch(e)
            {
                console.log(e);
            }
        }
    }

    handleSubmit(e)
    {
        let filters = {
            description: this.state.job_description_filter,
            location: this.state.location_filter
        };
        
            this.getResults(filters);
            if(this.state.job_listings.length <= 0)
            {
                
            }
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
                renderLoader={this.state.render_loader}
                data={this.state.job_listings}
            />

            </div>
            
        )
    }
}