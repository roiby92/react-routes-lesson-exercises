import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        let fentitiesCategory = this.props.match.params.fentities
        let fentityName = this.props.match.params.name
        const fentities = this.props.state[fentitiesCategory]
        let fentity = fentities.find(f => f.name === fentityName)
        return (
            <Fragment>
                {!fentity ? <Redirect to={`/directory/${fentitiesCategory}`} /> : (
                    <div id="creature-container">
                        <Link to={`/directory/${fentitiesCategory}`}>Back to {fentitiesCategory}</Link>
                        <h1>{fentity.name}</h1>
                        <img src={fentity.imgUrl} alt="" />
                        <div className="title">Power:</div>
                        <div className="power text"> {fentity.power}</div>
                        <div className="other text">{fentity.other}</div>
                    </div>
                )}
            </Fragment>
        )
    }
}

export default Fentity;
