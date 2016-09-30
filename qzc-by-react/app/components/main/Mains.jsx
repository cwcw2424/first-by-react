import React from 'react'
var h1style = {
   textAlign:'center',
   fontWeight:'bold',
   fontSize:'20px'
};
export default React.createClass({
  render() {
    const { userName, repoName } = this.props.params
    return (
      <div>
        <h2 style={h1style}>{userName} / {repoName}</h2>
      </div>
    )
  }
})
