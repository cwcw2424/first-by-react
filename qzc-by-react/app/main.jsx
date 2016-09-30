import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import App from './components/index/App.jsx'
import Home from './components/index/Home.jsx'
import Main from './components/main/Main.jsx'
import Mains from './components/main/Mains.jsx'
import News from './components/news/News.jsx'
import Edu from './components/edu/Edu.jsx'
import Explore from './components/explore/Explore.jsx'
import ExplorePage1 from './components/explore/ExplorePage1.jsx'
import ExplorePage2 from './components/explore/ExplorePage2.jsx'

/* 样式文件加载 */
import './css/reset.css'
import './css/iconfont.css'
import './scss/main.scss'

import './lib/slick-carousel/slick/slick.css'
import './lib/slick-carousel/slick/slick-theme.css'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="news" component={News}/>
            <Route path="explore" component={Explore}>
                <IndexRoute component={ExplorePage1}/>
                <Route path="ChildPage1" component={ExplorePage1}/>
                <Route path="ChildPage2" component={ExplorePage2}/>
            </Route>
            <Route path="main" component={Main}>
              <Route path="/main/:userName/:repoName" component={Mains}/>
            </Route>
        </Route>
        <Route path="/edu" component={Edu}>
          <Route path="/edu/:name" component={Edu}/>
        </Route>

    </Router>
), document.getElementById('app'))
