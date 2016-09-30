import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>
            <div className="banner">
                <div className="swiper-container">
                    <Slider />
                </div>
                <div className="top-nav clearfix">
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe60e;</i>
                            福州
                        </a>
                    </div>
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe60e;</i>
                            长乐
                        </a>
                    </div>
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe60e;</i>
                            连江
                        </a>
                    </div>
                </div>
            </div>
            <div className="menu">
                <ul>
                  <li>
                   <NavLink to="/edu/机票" >
                    <div className="navTab">
                      <div style={{opacity: 1}}>
                        <img src={('../../img/Image 001.png')}/>
                      </div>
                      <strong>机票</strong>
                    </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/edu/酒店?name=wanda">
                      <div className="navTab">
                        <div>
                          <img src={('../../img/Image 002.png')}/>
                        </div>
                        <strong>酒店</strong>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 003.png')}/>
                      </div>
                      <strong>火车票</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 004.png')}/>
                      </div>
                      <strong>旅游度假</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 005.png')}/>
                      </div>
                      <strong>领里程</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 006.png')}/>
                      </div>
                      <strong>汽车票</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 007.png')}/>
                      </div>
                      <strong>门票</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 008.png')}/>
                      </div>
                      <strong>Wifi电话卡</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 009.png')}/>
                      </div>
                      <strong>周边游</strong>
                    </div>
                  </li>
                  <li>
                    <div className="navTab">
                      <div>
                        <img src={('../../img/Image 010.png')}/>
                      </div>
                      <strong>租车接送机</strong>
                    </div>
                  </li>
                </ul>
                {/* <div className="col3">
                    <NavLink to="/edu">
                        <img src={require('../../img/menu_edu.png')}/>
                        一年级画画
                    </NavLink>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_safaguard.png')}/>
                        二年级跳舞
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_policy.png')}/>
                        三年级乒乓
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_server.png')}/>
                        四年级篮球
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_train.png')}/>
                        五年级国画
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_labour.png')}/>
                        六年级毕业
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_train.png')}/>
                        初中打架
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_suggestion.png')}/>
                        高中游戏
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_more.png')}/>
                        大学干啥
                    </a>
                </div> */}
            </div>
        </div>
    )
  }
})
