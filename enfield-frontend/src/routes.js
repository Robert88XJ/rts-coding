import React from 'react'
import {Route} from 'react-router-dom'

import App from './App'
import Home from './components/home/Home'

const AppRoutes =()=>{
    return(
        <App>
            <Route path="/" component={Home}/>
        </App>
    )
}

export default AppRoutes