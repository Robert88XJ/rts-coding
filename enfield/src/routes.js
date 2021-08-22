import React from 'react'
import {Route} from 'react-router-dom'

import App from './App'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Resume from './components/resume/Resume'

const AppRoutes =()=>{
    return(
        <App>
            <>
                <Route exact path="/" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/about" component={About}/>
                <Route path="/resume" component={Resume}/>
            </>
        </App>
    )
}

export default AppRoutes