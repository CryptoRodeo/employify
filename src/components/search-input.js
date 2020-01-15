import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class SearchInput extends Component
{
     constructor(props)
     {
         super(props);

         this.state={value: props.value};

     }
     render()
     {
         return(
             <div className="input-container">
                     <input type="text" 
                        
                        className="form-input" 
                        placeholder={this.props.description}
                        onChange={this.props.handleChange}
                        />
             </div>
         );
     }
}