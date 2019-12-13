import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return <div>Hello Welcome to Fusion Api</div>;
};

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
