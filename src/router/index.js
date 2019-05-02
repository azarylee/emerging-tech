import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../views/Homepage'
import Lesson1 from '../views/lesson1/lesson1'
import Lesson2 from '../views/lesson2/lesson2'
import Lesson3 from '../views/lesson3/lesson3'

class Routers extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/emerging-tech/" component={Homepage} />
                <Route path="/assignment/lesson1" component={Lesson1} />
                <Route path="/assignment/lesson2" component={Lesson2} />
                <Route path="/assignment/lesson3" component={Lesson3} />
            </Switch>
            
        )
    }   
}
export default Routers;