import * as React from 'react';
import { UserInfoComponent } from '../userInfo/UserInfo.Component';
import { UserProfileResponse } from '../../types/user.types';
import { observer } from 'mobx-react';

interface HomeProps {
    data: UserProfileResponse;
}
@observer
export class HomeComponent extends React.Component<HomeProps> {
    render() {
        return (
            <UserInfoComponent data={this.props.data}/>
        );
    }
}