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
            returned_results:false,
            began_searching: false
        };
        this.handleJobFilter = this.handleJobFilter.bind(this);
        this.handleLocationFilter = this.handleLocationFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        this.setState({returned_results: true})
                        this.setState({render_loader: false});
                    }
                    else
                    {
                        this.setState({returned_results: false})
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
        this.setState({began_searching: true}); //user began searching.
        this.getResults(filters);
        if(this.state.job_listings.length <= 0)
        {
                
        }
        e.preventDefault();
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
                returnedResults={this.state.returned_results}
                beganSearching={this.state.began_searching}
                data={this.state.job_listings}
            />

            </div>
            
        )
    }
}