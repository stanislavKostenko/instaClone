import * as React from 'react';
import { match } from 'react-router';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';

import './Details.Component.scss';

import { Media } from '../../types/media.types';
import { DetailsStore } from './Details.store';
import { CommentsComponent } from '../Comments/Comments.Component';

interface DetailsProps {
    match: match<{ id: string }>;
}

@observer
export class DetailsComponent extends React.Component<DetailsProps> {
    private detailsStore: DetailsStore = new DetailsStore();
    componentDidMount() {
        const id = this.props.match!.params.id;
        this.detailsStore.getData(id);
        reaction(() => this.detailsStore.media, (media: Media) => {
            console.log(media);
        });
        reaction(() => this.detailsStore.comments, (comment) => {
            console.log(comment);
        });
    }

    render() {
        if (this.detailsStore.media === undefined) {
            return (<div>Media loading...</div>);
        }
        debugger;
        const comments = this.detailsStore.comments.map((comment, index) => {
            debugger;
            return <CommentsComponent comments={comment} key={index} />;
        } );
        return (
            <div className="media-list__item__details">
                <div className="media-list__item__details__image">
                    <img src={this.detailsStore.media.images.standard_resolution.url} alt="photo"/>
                </div>
                {comments}
            </div>
        );
    }
}