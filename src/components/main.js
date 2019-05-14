import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4/v5
import ReduxExample from './example'

const Todo = () => {
  return (
    <div>TODO PAGE NOTHING HERE</div>
  )
}

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
