import React from 'react';
import { Link } from 'react-router-dom';

export default class Weekly extends React.Component {
    render() {
        return (
            <div>
                週間ランキング
                <Link to="/">
                    <p>トップへ戻る</p>
                </Link>
            </div>

        );
    }
}