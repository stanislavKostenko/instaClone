import * as React from 'react';
import { match } from 'react-router';
import { observer } from 'mobx-react';
import { Media } from '../../types/media.types';
import { reaction } from 'mobx';
import { detailsStore } from './Details.store';

interface DetailsProps {
    match: match<{ id: string }>;
}

@observer
export class DetailsComponent extends React.Component<DetailsProps> {
    componentDidMount() {
        const id = this.props.match!.params.id;
        detailsStore.getData(id);
        reaction(() => detailsStore.media, (media: Media) => {
            console.log(media);
        });
    }

    render() {
        if (detailsStore.media === undefined) {
            return (<div>Media loading...</div>);
        }
        return (
            <div className="media-list__item__details" />
        );
    }

}