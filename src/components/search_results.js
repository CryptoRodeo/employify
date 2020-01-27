import React, {Component} from "react";
import JobListings from "./job-listings";


class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
    }

    toggle_results()
    {
        if(this.props.returnedResults && this.props.beganSearching)
        {
            return <JobListings data={this.props.data} />;
        }
        //Edit these sections
        else if(!this.props.returnedResults && this.props.beganSearching)
        {
        
            return <h1>No results...</h1>;
        }
        else
        {
            return <h1>Begin searching!</h1>;
        }
    }

    render()
    {
        return this.toggle_results()
    }
}

export default SearchResults;