import * as React from 'react';
import { Media } from '../../types/media.types';
import './MediaListItem.Component.scss';
import { Link } from 'react-router-dom';

interface Props {
    data: Media;
}
export class MediaListItemComponent extends React.Component<Props> {
    render() {
        return(
            <Link to={`/details/${this.props.data.id}`}>
                <div className="media-list__item">
                    <img src={this.props.data.images.low_resolution.url} alt="photo"/>
                </div>
            </Link>
        );
    }
}