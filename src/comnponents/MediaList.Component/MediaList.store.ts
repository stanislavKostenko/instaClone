import { action, observable } from 'mobx';
import { MediaProvider } from '../../providers/media.provider';
import { Media } from '../../types/media.types';

export class MediaListStore {
    @observable
    userData: Array<Media>;

    private _provider: MediaProvider;

    constructor(provider: MediaProvider) {
        this._provider = provider;
    }

    public init(): void {
        const resp = this._provider.getUserMedia();
        resp
            .then(this.updateUserData.bind(this))
            .catch((e) => {
                console.error(e);
            });
    }

    @action
    private updateUserData(userProfile: Array<Media>) {
        this.userData = userProfile;
    }
}