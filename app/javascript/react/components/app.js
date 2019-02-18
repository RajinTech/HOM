import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ListingIndexContainer from '../containers/ListingIndexContainer'
import ListingShowContainer from '../containers/ListingShowContainer'
import ListingFormContainer from '../containers/ListingFormContainer'
import NavBar from '../src/NavBar';
import React from 'react'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={ListingIndexContainer} />
      <Route path="listings" component={ListingIndexContainer}/>
        <Route path="listings/new" component={ListingFormContainer}/>
      <Route path="listings/:id" component={ListingShowContainer}/>
    </Route>
  </Router>
 )
}

export default App
