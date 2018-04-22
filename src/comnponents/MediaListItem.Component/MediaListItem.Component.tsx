import * as React from 'react';
import { Media } from '../../types/media.types';
import './MediaListItem.Component.scss';

interface Props {
    data: Media;
}
export class MediaListItemComponent extends React.Component<Props> {
    render() {
        return(
            <div className="media-list__item">
                <img src={this.props.data.images.low_resolution.url} alt="photo"/>
            </div>
        );
    }
}