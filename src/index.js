import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* コンポーネント */
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello! World.</h1>
        <p>ここはコンポーネントとしてjsx側に書いた部分</p>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
