import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
//import PrivateRoute from './PrivateRoute'

//import Landing from '../../pages/Landing'
import Dashboard from '../../pages/dashboard'

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Fragment>
  )
}

export default Routes
