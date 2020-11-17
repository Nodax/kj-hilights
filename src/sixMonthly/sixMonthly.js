import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class SixMonthly extends React.Component {
    render() {
        return (
            <div>
                6か月間ランキング
                <Link to="/">
                    <p>トップへ戻る</p>
                </Link>
            </div>
        );
    }
}