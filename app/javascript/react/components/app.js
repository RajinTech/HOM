import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ListingIndexContainer from '../containers/ListingIndexContainer'
import MapContainer from '../containers/MapContainer'
import ListingShowContainer from '../containers/ListingShowContainer'
import ListingFormContainer from '../containers/ListingFormContainer'
import NavBar from '../src/NavBar';



const App = props => {
 return(

   <Router history={browserHistory}>
     <Route path='/' component={NavBar} >
       <IndexRoute component={ListingFormContainer} />
       <Route path="cereals/:id" component={ListingShowContainer}/>
     </Route>
   </Router>
 )
}

export default App
