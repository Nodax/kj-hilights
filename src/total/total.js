import React from 'react';
import { Link } from 'react-router-dom';

export default class Total extends React.Component {
    render() {
        return (
            <div>
                累計ランキング
                <Link to="/">
                    <p>トップへ戻る</p>
                </Link>
            </div>

        );
    }
}