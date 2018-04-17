import * as React from 'react';
import './App.scss';
import { Header } from './comnponents/header/Header.component';
import { AppStore } from './stores/app.store';
import { observer } from 'mobx-react';
import { UserInfoComponent } from './comnponents/userInfo/UserInfo.Component';

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
      <div className="App">
        <Header commentsCount={0}/>
        <UserInfoComponent
            image={this.props.store.userPicture}
            userName={this.props.store.userName}
            userMedia={this.props.store.userMedia}
            userFollowers={this.props.store.userFollowers}
            userFollows={this.props.store.userFollows}
            userFullName={this.props.store.userFullName}
            userBio={this.props.store.userBio}
        />
      </div>
    );
  }
}

export default App;