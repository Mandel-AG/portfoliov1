import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home, Competences, Formations, Projets, Contact, Cv, Header} from './components';
import './App.css'


class App extends React.Component {
    render() {
        return (
            <Router>
                    <Header />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/competences" component={Competences} />
                    <Route exact path='/formations' component={Formations}/>
                    <Route exact path='/projets' component={Projets}/>
                    <Route exact path='/cv' component={Cv}/>
                    <Route exact path='/contact' component={Contact}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
