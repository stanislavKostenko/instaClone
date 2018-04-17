import * as React from 'react';
import './Header.scss';
import { Logo } from '../logo/Logo.component';
import { SearchForm } from '../searchForm/SearchForm';
import { NavigationComponent } from '../navigation/Navigation.Component';

interface HeaderProps {
    commentsCount: number;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <header className="app-header">
                <div className="app-header__content">
                    <Logo/>
                    <SearchForm/>
                    <NavigationComponent/>
                </div>
            </header>
        );
    }
}
