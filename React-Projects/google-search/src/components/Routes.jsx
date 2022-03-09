import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Results from './Results'

const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to='/search'/>
                </Route>
                <Route exact path={['/search','/images','/news','/videos']}>
                    <Results/>
                </Route>
                <Route path='/'>
                    <h1>Not Found 404</h1>
                </Route>
            </Switch>
        </div>
    )
}

export {Routes}
