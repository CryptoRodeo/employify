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

    toggle_results()
    {
        if(!this.props.renderLoader && this.props.returnedResults && this.props.beganSearching)
        {
            return <JobListings data={this.props.data} />;
        }
        else if(!this.props.returnedResults && this.props.beganSearching)
        {
            if(this.props.returnedResults !== '')
            {
                return <h1>No results...</h1>;
            }
            return <Loader />;
        }
        return '';
    }

    render()
    {
        return this.toggle_results()
    }
}

export default SearchResults;