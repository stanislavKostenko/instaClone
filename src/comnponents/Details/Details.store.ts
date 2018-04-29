import { action, computed, observable } from 'mobx';
import { Media } from '../../types/media.types';
import { detailsProvider } from './Details.provider';
import { Comment } from '../../types/comment.types';

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

    @observable
    private _comments: Array<Comment> = [];

    @computed
    get comments(): Array<Comment> {
        return this._comments;
    }

    getData(id: string): void {
        this.fetchMediaDetails(id);
        this.fetchMediaComments(id);
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

    private fetchMediaComments(id: string): void {
        detailsProvider
            .fetchComments(id)
            .then(this.updateComments.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));
    }

    @action
    private updateMedia(media: Media) {
        this._media = media;
    }

    @action
    private updateComments(comment: Array<Comment>) {
        this._comments = comment;
    }
}