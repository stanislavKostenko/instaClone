import * as React from 'react';
import './MediaList.Component.scss';
import { Media } from '../../types/media.types';
import { MediaListItemComponent } from '../MediaListItem.Component/MediaListItem.Component';

interface MediaListComponentProps {
    data: Array<Media>;
}

export class MediaListComponent extends React.Component<MediaListComponentProps> {
    loadingScreen() {
        return <div>Loading...</div>;
    }

    dataScreen() {
        const mediaList = this.props.data.map( (data: Media, index: number) => {
            return <MediaListItemComponent data={data} key={index}/>;
        });
        return(
            <div className="media-list">
                {mediaList}
            </div>
        );
    }
    render() {
        if (!this.props.data) {
            return this.loadingScreen();
        } else {
            return this.dataScreen();
        }

    }
}