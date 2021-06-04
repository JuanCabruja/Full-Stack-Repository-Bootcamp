import Public from './Public';
import Login from './Login';
import Dashboard from './Dashboard';
import Error from './Error';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


 

export default function Pages() {
    return (
        <BrowserRouter >

            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/public" component={Public}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route component={Error}/>

                <PrivateRoute path="/dashboard">
                    <Dashboard /> {/* Este será children en PrivateRoute.js */}
                </PrivateRoute >

            </Switch>

        </BrowserRouter>
    )
}