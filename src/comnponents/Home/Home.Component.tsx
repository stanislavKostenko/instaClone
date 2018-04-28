import * as React from 'react';
import { UserInfoComponent } from '../userInfo/UserInfo.Component';
import { observer } from 'mobx-react';
import { AppStore } from '../../stores/app.store';
import { MediaListComponent } from '../MediaList.Component/MediaList.Component';
import { MediaListStore } from '../MediaList.Component/MediaList.store';

interface HomeProps {
    store: AppStore;
    mediaStore: MediaListStore;
}
@observer
export class HomeComponent extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <UserInfoComponent data={this.props.store.userData}/>
                <MediaListComponent data={this.props.mediaStore.userData} />
            </div>
        );
    }
}