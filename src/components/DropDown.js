import React, { Component } from 'react';
import FentitySearch from './FentitySearch'

class DropDown extends Component {
  render() {
    const fentities = this.props.fentities
    if(fentities.length > 0){
        return (
            <div id="drop-down-search">
                {fentities.map(f => <FentitySearch class={f.class} name={f.name} img={f.img}/>)}
            </div>
        )
    }
    return <div></div>
  }
}

export default DropDown;
