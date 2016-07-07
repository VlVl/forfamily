import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Main from './components/Main'
import List from './components/List'
import wrapListFunc from './containers/WrapList'
import Item from './containers/Item'
//import Item from './containers/Item'


import configureStore from './store/configureStore'

import './static/css/slick.css'
import './static/css/slick-theme.css'
import './static/css/style.css'
import './static/js/jquery-ui/jquery-ui.min.css'

import './static/js/jquery-ui/jquery-ui.min.js'
import './static/js/slick.min.js'
import './static/js/doubletaptogo.min.js'
import './static/js/readmore.min.js'
//import './static/js/scripts.js'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Main} />
                    <Route path=':category' component={wrapListFunc(List)} />
                    <Route path=':category/:item' component={Item} />
                </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
