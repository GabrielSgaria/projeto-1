import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {React} from 'react'

import Repositorio from './pages/Repositorio'
import Main from './pages/Main'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/repositorio" component={Repositorio}/>
            </Switch>
        
        </BrowserRouter>
    )
}