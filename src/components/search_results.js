import React, {Component} from "react";
import JobListings from "./job-listings";
import Loader from "./loader";


var axios = require('axios');


class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            (!this.props.renderLoader) ? <JobListings data={this.props.data} /> : <Loader />
        );
    }
}

export default SearchResults;