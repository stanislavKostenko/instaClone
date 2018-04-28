import { action, computed, observable } from 'mobx';
import { Media } from '../../types/media.types';
import { detailsProvider } from './Details.provider';

export class DetailsStore {
    @observable
    private _media: Media;

    @computed
    get media(): Media {
        return this._media;
    }

    @observable
    private _errorMessage: string;

    @computed
    get errorMessage(): string {
        return this._errorMessage;
    }

    getData(id: string): void {
        this.fetchMediaDetails(id);
        // this.fetchMediaComments(id);
    }

    private fetchMediaDetails(id: string): void {
        detailsProvider
            .fetchMedia(id)
            .then(this.updateMedia.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));
    }

    @action
    private updateMedia(media: Media) {
        this._media = media;
    }
}

export const detailsStore = new DetailsStore();