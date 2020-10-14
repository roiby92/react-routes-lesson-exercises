import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import DropDown from './DropDown'

import '../styles/home.css'

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            fentities: [],
            value: '',
        }

    }

    handleChange = (event) => {
        const fentities = this.props.state,
            foundFentities = []
        this.setState({ value: event.target.value }, function () {
            if (this.state.value) {
                for (let key in fentities) {
                    fentities[key]
                        .filter(f => f.name.toLowerCase().includes(this.state.value))
                        .forEach(f => {
                            const fentityObj = { class: key, name: f.name, img: f.imgUrl }
                            foundFentities.push(fentityObj)
                        })
                }
                this.setState({
                    fentities: foundFentities
                })
            } else {
                this.setState({
                    fentities: []
                })
            }
        })
    }

    _handleKeyPress = (event) => {
        const { history } = this.props;
        if (event.charCode === 13) {
            history.push(`/directory/${this.state.fentities[0].class}/${this.state.fentities[0].name}`);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div id="u-input">
                        <input type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Ask and you shall receive"
                            onKeyPress={e => this._handleKeyPress(e)} />
                        <Link to={
                            this.state.fentities[0]
                                ? `/directory/${this.state.fentities[0].class}/${this.state.fentities[0].name}`
                                : ''}>
                            <div id="button">Seek</div>
                        </Link>
                        <DropDown fentities={this.state.fentities} />
                    </div>
                </div>

                <h1 id="home-title">Your Adventure</h1>

                <div id="home-container">
                    <div id="world"><span className="main-directory-text">World</span></div>
                    <div id="wizards"><Link to="/directory/wizards"><span className="main-directory-text">Wizards</span></Link></div>
                    <div id="bestiary"><Link to="/directory/bestiary"><span className="main-directory-text">Bestiary</span></Link></div>
                    <div id="potions"><span className="main-directory-text">Potions</span></div>
                    <div id="deities"><span className="main-directory-text">Deities</span></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);