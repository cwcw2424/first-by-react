import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>
          <footer className="fixed-bottom clearfix">
             <ul>
                <li>
                  <NavLink activeClassName="ac-1" onlyActiveOnIndex to="/" >
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="ac-2">
                    <p className="nav-2">发现</p>
                  </NavLink>
                </li>
                <li >
                  <NavLink to="/explore" activeClassName="ac-3">
                    <p className="nav-3">目的地</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/main" activeClassName="ac-4">
                    <p className="nav-4">行程</p>
                  </NavLink>
                </li>
            </ul>
          </footer>
          {this.props.children}
        </div>
    )
  }
})
