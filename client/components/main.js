import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4/v5
import ReduxExample from './example'
import Todo from './example-page-two'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ReduxExample} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </div>
  )
}

export default Main
