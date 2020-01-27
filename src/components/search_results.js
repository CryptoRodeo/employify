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

    returnResults()
    {
        if(this.props.is_awaiting_results)
        {  
            return <Loader />;
        }
        else
        {
            return <JobListings data={this.props.data} />;
        }
    }

    render()
    {
        return(
            this.returnResults()
        );
    }
}

export default SearchResults;