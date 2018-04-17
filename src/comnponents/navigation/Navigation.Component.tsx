import * as React from 'react';
import './Navigation.Component.scss';

export class NavigationComponent extends React.Component {
    render() {
        return(
            <div className="navigation">
                <a href="#">
                    <i className="fa fa-compass" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fa fa-heart-o" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fa fa-user-o" aria-hidden="true" />
                </a>
            </div>
        );
    }
}