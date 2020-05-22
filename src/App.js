import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home, Competences, Formations, Projets, Contact, Cv, Footer, Header} from './components';
import './App.css'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='componentheader'>
                    <Header />
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/competences" component={Competences} />
                    <Route exact path='/formations' component={Formations}/>
                    <Route exact path='/projets' component={Projets}/>
                    <Route exact path='/cv' component={Cv}/>
                    <Route exact path='/contact' component={Contact}/>

                </Switch>
                <div className='componentfooter'>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
