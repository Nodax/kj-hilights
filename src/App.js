import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "firebase/firestore"

//各ページのコンポーネント群
import top from "./top/top.js"
import total from "./total/total.js"
import weekly from "./weekly/weekly.js"
import monthly from "./monthly/monthly.js"
import threeMonthly from "./threeMonthly/threeMonthly.js"
import sixMonthly from "./sixMonthly/sixMonthly.js"

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