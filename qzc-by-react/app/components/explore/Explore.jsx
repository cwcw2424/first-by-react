import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute ,Link} from 'react-router'

import  './explore.scss'
const ACTIVE = { color:'#fff',background: '#08ba6d'};
var divStyle = {
  float:'left',
  width:'50%'
};
export default React.createClass({
  render() {
    return (
      <div className="explore">
              <div style={divStyle}>
                  <Link activeClassName="cur" onlyActiveOnIndex to="/explore/ChildPage1">Tab1</Link>
              </div>
              <div style={divStyle}>
                  <Link activeClassName="cur"  to="/explore/ChildPage2">Tab2</Link>
              </div>
        {this.props.children}
      </div>
    )
  }
})
