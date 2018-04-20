import { action, observable } from 'mobx';
import { UserProvider } from '../providers/user.provider';
import { UserProfileResponse } from '../types/user.types';

export class AppStore {
    @observable
    userData: UserProfileResponse;

    private _provider: UserProvider;

    constructor(provider: UserProvider) {
        this._provider = provider;
    }

    public init(): void {
        const resp = this._provider.getUserInfo();
        resp
            .then(this.updateUserData.bind(this))
            .catch((e) => {
                console.error(e);
            });
    }

    @action
    private updateUserData(userProfile: UserProfileResponse) {
        this.userData = userProfile;
    }
}