import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Counter from './src/redux/counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
