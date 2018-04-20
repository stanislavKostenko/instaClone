import * as React from 'react';
import './App.scss';
import { Header } from './comnponents/header/Header.component';
import { AppStore } from './stores/app.store';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HomeComponent } from './comnponents/Home/Home.Component';
import { AboutComponent } from './comnponents/About/About.Component';

interface AppProps {
    store: AppStore;
}

@observer
class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }

    componentDidMount() {
        this.props.store.init();
    }

    render() {
        return (
            <Router>
            <div className="App">
                <Header/>
                <Route
                    exact={true}
                    path={'/'}
                    render={({...props}) =>  <HomeComponent {...props} data={this.props.store.userData} />}
                />
                <Route path={'/about'} component={AboutComponent}/>
            </div>
            </Router>
        );
    }
}

export default App;