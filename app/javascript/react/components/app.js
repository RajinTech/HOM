import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ListingIndexContainer from '../containers/ListingIndexContainer'
import ListingShowContainer from '../containers/ListingShowContainer'
import NavBar from '../src/NavBar';



const App = props => {
  return(

    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={ListingIndexContainer} />
        <Route path="cereals/:id" component={ListingShowContainer}/>
      </Route>
    </Router>
  )
}

export default App
