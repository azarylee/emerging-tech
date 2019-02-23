import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../views/Homepage'
import Lesson1 from '../views/lesson1/lesson1'

class Routers extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/emerging-tech/" component={Homepage} />
                <Route path="/assignment/lesson1" component={Lesson1} />
            </Switch>
            
        )
    }   
}
export default Routers;