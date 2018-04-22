import * as React from 'react';
import './App.scss';
import { Header } from './comnponents/header/Header.component';
import { AppStore } from './stores/app.store';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HomeComponent } from './comnponents/Home/Home.Component';
import { SettingsComponent } from './comnponents/About/Settings.Component';
import { MediaListComponent } from './comnponents/MediaList.Component/MediaList.Component';
import { MediaListStore } from './comnponents/MediaList.Component/MediaList.store';

interface AppProps {
    store: AppStore;
    mediaStore: MediaListStore;
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
                        render={({...props}) => <HomeComponent {...props} store={this.props.store}/>}
                    />
                    <Route path={'/settings'} component={SettingsComponent}/>
                    <MediaListComponent data={this.props.mediaStore.userData}/>
                </div>
            </Router>
        );
    }
}

export default App;