import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* コンポーネント */
class MyComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      viewText: "テスト",
      viewFlag: 0,
    }
  }


  //関数も利用可能
  testMethod() {
    return 1 + 1;
  }

  //関数でDOMを返却することもできる
  testMethodDom() {
    return (
      <p>この部分はメソッド内で生成したDOMです</p>
    )
  }

  //viewFlagを変更する
  changeViewFlag() {
    let newFlag = this.state.viewFlag == 1 ? 0 : 1;
    this.setState({ viewFlag: newFlag });
  }

  render() {
    //変数を利用
    let testPage = "変数用テスト"
    return (
      <div>
        <h1>kj-hilights</h1>
        <p>ここからはコンポーネントとしてjsx側に書いた部分</p>
        <p>Stateを利用する{this.state.viewText}</p>
        <p>Stateによって表示を変える{this.state.viewFlag == 1 ? this.state.viewText : "1ではない"}</p>
        <p>↓ボタンによってstateを動的に切り替える↓</p>
        <button onClick={() => this.changeViewFlag()}>切替</button>
        <p>変数は中カッコで呼び出せる{testPage}</p>
        <p>メソッドも中カッコで呼び出せる{this.testMethod()}</p>
        <p>メソッド内でDOMを生成もできる↓{this.testMethodDom()}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
