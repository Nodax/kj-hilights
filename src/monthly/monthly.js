import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Monthly extends React.Component {
    render() {
        return (
            <div>
                月間ランキング
                <Link to="/">
                    <p>トップへ戻る</p>
                </Link>
            </div>

        );
    }
}