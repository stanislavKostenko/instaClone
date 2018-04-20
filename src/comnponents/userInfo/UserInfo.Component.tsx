import * as React from 'react';
import './UserInfo.Component.scss';
import { Button } from '../button/Button';
import { UserProfileResponse } from '../../types/user.types';
import { Link } from 'react-router-dom';

interface UserInfoComponentProps {
    data: UserProfileResponse;
}

export class UserInfoComponent extends React.Component<UserInfoComponentProps> {
    constructor(props: UserInfoComponentProps) {
        super(props);
    }

    renderLoader() {
        return(
            <div>Loading...</div>
        );
    }

    renderContent() {
        return(
            <div className="user-info">
                <img
                    src={this.props.data.profile_picture}
                    alt="user_photo"
                    className="user-info__photo"
                />
                <div className="user-info__wrapper">
                    <div className="user-info__settings">
                        <h3 className="user-info__settings__name">
                            {this.props.data.username}
                        </h3>
                        <Link to={'/settings'}>
                            <Button>
                                Редактировать профиль
                            </Button>
                        </Link>
                        <i className="fa fa-cog" aria-hidden="true" />
                    </div>
                    <div className="user-info__media">
                        <span className="user-info__media__posts">
                            {this.props.data.counts.media} публикаций
                        </span>
                        <span className="user-info__media__followers">
                            {this.props.data.counts.followed_by} подписчиков
                        </span>
                        <span className="user-info__media__follows">
                            Подписки: {this.props.data.counts.follows}
                        </span>
                    </div>
                    <div className="user-info__description">
                        <h4 className="user-info__description__full-name">
                            {this.props.data.full_name}
                        </h4>
                        <p className="user-info__description__about">
                            {this.props.data.bio}
                        </p>
                    </div>

                </div>
            </div>
        );
    }

    render() {
        if (!this.props.data) {
            return (
                this.renderLoader()
            );
        }

        return(
            this.renderContent()
        );
    }
}