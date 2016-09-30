import React from 'react'
import NavLink from '../lib/NavLink.jsx'
import { browserHistory } from 'react-router'

var h1style = {
   textAlign:'center',
   fontWeight:'bold',
   fontSize:'20px'
};
var btstyle = {
  fontWeight:'bold',
  fontSize:'20px',
  width: '100%',
  background: "red",
  marginTop:'10px'
};
var listyle = {
    float: 'left',
    width: '50%',
    textAlign: 'center',
    background: '#666',
    height:'30px',
    lineHeight:'30px'
}
export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  // handleSubmit(event) {
  //   event.preventDefault()
  //   const userName = event.target.elements[0].value
  //   const repo = event.target.elements[1].value
  //   const path = `/repos/${userName}/${repo}`
  //   browserHistory.push(path)
  // },
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/main/${userName}/${repo}`
    this.context.router.push(path)
  },
  render() {
    return (
      <div>
        <h1 style={h1style}>Repos</h1>
        <ul>
          <li style={listyle}><NavLink to="/main/reactjs/react-router" activeClassName="active">React Router</NavLink></li>
          <li style={listyle}><NavLink to="/main/facebook/react" activeClassName="active">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" style={{height:'50px',marginLeft:'10px'}}/>
              /
              <input type="text" placeholder="repo" style={{height:'50px'}}/>
              <button type="submit" style={btstyle}>Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
