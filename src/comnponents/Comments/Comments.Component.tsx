import * as React from 'react';
import { Comment } from '../../types/comment.types';

interface CommentsComponentProps {
    comments: Comment;
}
export class CommentsComponent extends React.Component<CommentsComponentProps> {
    render() {
        console.log(this.props.comments);
        return(
            <div className="media-list__item__details__comments">
                {this.props.comments.text}
            </div>
        );
    }
}