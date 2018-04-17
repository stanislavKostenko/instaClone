import * as React from 'react';
import './Logo.Component.scss';

export class Logo extends React.Component {
    render() {
        return (
            <div className="app-logo">
                <a href="#">
                    <i
                        className="fa fa-instagram app-logo__icon fa-2x"
                        aria-hidden="true"
                    />
                </a>
                <a href="#">
                    <img
                        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png"
                        alt=""
                        className="app-logo__image-text"
                    />
                </a>
            </div>);
    }
}