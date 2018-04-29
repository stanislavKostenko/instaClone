import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import { AppStore } from './stores/app.store';
import { UserProvider } from './providers/user.provider';
import { MediaListStore } from './comnponents/MediaList.Component/MediaList.store';
import { MediaProvider } from './providers/media.provider';
import { DetailsStore } from './comnponents/Details/Details.store';

const userProvider = new UserProvider();
const appStore = new AppStore(userProvider);
const mediaProvider = new MediaProvider();
const mediaStore = new MediaListStore(mediaProvider);
const detailsStore = new DetailsStore();

ReactDOM.render(
    <App store={appStore} mediaStore={mediaStore} detailsStore={detailsStore}/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
