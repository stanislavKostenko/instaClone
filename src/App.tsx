import * as React from 'react';
import './App.scss';
import { Header } from './comnponents/header/Header.component';
import { AppStore } from './stores/app.store';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HomeComponent } from './comnponents/Home/Home.Component';
import { SettingsComponent } from './comnponents/Settings/Settings.Component';
import { MediaListStore } from './comnponents/MediaList.Component/MediaList.store';
import { DetailsComponent } from './comnponents/Details/Details.Component';
import { DetailsStore } from './comnponents/Details/Details.store';

interface AppProps {
    store: AppStore;
    mediaStore: MediaListStore;
    detailsStore: DetailsStore;
}

@observer
class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }

    componentDidMount() {
        this.props.store.init();
        this.props.mediaStore.init();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route
                        exact={true}
                        path={'/'}
                        render={({...props}) =>
                            <HomeComponent
                                {...props}
                                store={this.props.store}
                                mediaStore={this.props.mediaStore}
                            />}
                    />
                    <Route path={'/settings'} component={SettingsComponent}/>
                    <Route
                        path={'/details/:id'}
                        render={({...props}) =>
                            <DetailsComponent {...props}/>}
                    />
                </div>
            </Router>
        );
    }
}

export default App;