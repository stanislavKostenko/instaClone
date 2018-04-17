import * as React from 'react';
import './UserInfo.Component.scss';
import { Button } from '../button/Button';

interface UserInfoComponentProps {
    image: string;
    userName: string;
    userMedia: number;
    userFollows: number;
    userFollowers: number;
    userFullName: string;
    userBio: string;
}

export class UserInfoComponent extends React.Component<UserInfoComponentProps> {
    render() {
        return(
            <div className="user-info">
                <img
                    src={this.props.image}
                    alt="user_photo"
                    className="user-info__photo"
                />
                <div className="user-info__wrapper">
                    <div className="user-info__settings">
                        <h3 className="user-info__settings__name">
                            {this.props.userName}
                        </h3>
                        <Button>
                            Редактировать профиль
                        </Button>
                        <i className="fa fa-cog" aria-hidden="true" />
                    </div>
                    <div className="user-info__media">
                        <span className="user-info__media__posts">
                            {this.props.userMedia} публикаций
                        </span>
                        <span className="user-info__media__followers">
                            {this.props.userFollowers} подписчиков
                        </span>
                        <span className="user-info__media__follows">
                            Подписки: {this.props.userFollows}
                        </span>
                    </div>
                    <div className="user-info__description">
                        <h4 className="user-info__description__full-name">
                            {this.props.userFullName}
                        </h4>
                        <p className="user-info__description__about">
                            {this.props.userBio}
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}