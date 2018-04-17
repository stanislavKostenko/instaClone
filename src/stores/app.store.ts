import { action, observable } from 'mobx';
import { UserProvider } from '../providers/user.provider';
import { UserProfileResponse } from '../types/user.types';

export class AppStore {
    @observable
    userName: string = '';
    userPicture: string = '';
    userMedia: number = 0;
    userFollows: number = 0;
    userFollowers: number = 0;
    userFullName: string;
    userBio: string;
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

        const resp2 = this._provider.getUserPicture();
        resp2
            .then(this.updateUserData.bind(this))
            .catch((e) => {
                console.error(e);
            });
    }

    @action
    private updateUserData(userProfile: UserProfileResponse) {
        this.userName = userProfile.username;
        this.userPicture = userProfile.profile_picture;
        this.userMedia = userProfile.counts.media;
        this.userFollows = userProfile.counts.follows;
        this.userFollowers = userProfile.counts.followed_by;
        this.userFullName = userProfile.full_name;
        this.userBio = userProfile.bio;

    }
}