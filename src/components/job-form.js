import React,{Component} from 'react';

export default class JobForm extends Component
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                {/**
                 * TASK: Change how the values are passed onto the url parameters
                 * 
                 * Instead of a JSON object try the values themselves.
                 * 
                 * 
                 */}
                <form method="POST" action="http:localhost:8080/api" onSubmit={this.props.handleSubmit}>
                    <input
                    required
                        type="text"
                        name="description"
                        placeholder={this.props.job_description}
                        value={this.props.jobFilter}
                        onChange={this.props.handleJobFilter}
                        />
                    <input
                    required
                        type="text" 
                        name="location"
                        placeholder={this.props.location_description}
                        value={this.props.locationFilter}
                        onChange={this.props.handleLocationFilter}
                        />

                    <input type="checkbox" name="fulltime" value="Full time only"/>
                    <label htmlFor="fulltime">Full time only</label>
                    <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}