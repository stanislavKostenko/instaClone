import * as React from 'react';
import { UserInfoComponent } from '../userInfo/UserInfo.Component';
import { observer } from 'mobx-react';
import { AppStore } from '../../stores/app.store';

interface HomeProps {
    store: AppStore;
}
@observer
export class HomeComponent extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }
    render() {
        return (
            <UserInfoComponent data={this.props.store.userData}/>
        );
    }
}