import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Top extends React.Component {
    render() {
        return (
            <div>
                <h1>kj-hilights</h1>
                <p>これまでの生放送の瞬間最大コメント数を取得し、最もコメントが流れた2分間をまとめるページです</p>

                <p>最新動画</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cQLmPhdol4g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <Link to="/total">
                    <p>累計</p>
                </Link>
                <Link to="/weekly">
                    <p>直近1週間</p>
                </Link>
                <Link to="/monthly">
                    <p>直近1か月</p>
                </Link>
                <Link to="/3monthly">
                    <p>直近3か月</p>
                </Link>
                <Link to="/6monthly">
                    <p>直近半年</p>
                </Link>
            </div >
        );
    }
}