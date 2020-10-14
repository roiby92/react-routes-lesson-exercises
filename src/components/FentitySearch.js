import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import'../styles/fentity.css'

class FentitySearch extends Component {
  render() {
    return (
        <Link to={`/directory/${this.props.class}/${this.props.name}`}>
            <div className="fentity-search">
                <img src={this.props.img} className="fentity-search-img"/>
                <span className="fentity-search-name"> &ensp; {this.props.name}, </span>
                <span className="fentity-search-class"> &nbsp; {this.props.class}</span>
            </div>
        </Link>
    );
  }
}

export default FentitySearch;