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
                <form method="get" onSubmit={this.props.handleSubmit}>
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