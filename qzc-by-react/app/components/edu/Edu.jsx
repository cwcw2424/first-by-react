import React from 'react'

var h1style = {
   textAlign:'center',
   fontWeight:'bold',
   fontSize:'20px'
};
export default class Edu extends React.Component {
    render() {
        return(
            <div>
                <div className="toper">
                    <div className="sub-banner">
                        <a href="javascript:history.back();">
                            <img src={('../../img/arrow_left.png')} alt=""/>
                        </a>
                        <img src={('../../img/Image 011.png')} alt="" />
                    </div>
                    <h1 style={h1style}>{this.props.params.name}</h1>
                    <h1 style={h1style}>{this.props.location.query.name}</h1>
                </div>
            </div>
        )
  }
}
