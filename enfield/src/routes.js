import React from 'react'
import {Route} from 'react-router-dom'

import App from './App'
import Home from './components/home/Home'
import About from './components/about/About'

const AppRoutes =()=>{
    return(
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </App>
    )
}

export default AppRoutes