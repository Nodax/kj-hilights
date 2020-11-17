import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const top = () => {
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
    </div>
  );
};

//累計total
const total = () => {
  return (
    <div>
      累計ランキング
      <Link to="/">
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

//週間weekly
const weekly = () => {
  return (
    <div>
      週間ランキング
      <Link to="/">
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

//月間monthly
const monthly = () => {
  return (
    <div>
      月間ランキング
      <Link to="/">
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

//3か月間3monthly
const threeMonthly = () => {
  return (
    <div>
      3か月間ランキング
      <Link to="/">
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

//6か月間6monthly
const sixMonthly = () => {
  return (
    <div>
      6か月間ランキング
      <Link to="/">
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={top} />
          <Route path="/total" component={total} />
          <Route path="/weekly" component={weekly} />
          <Route path="/monthly" component={monthly} />
          <Route path="/3monthly" component={threeMonthly} />
          <Route path="/6monthly" component={sixMonthly} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;