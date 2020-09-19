import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
function App() {
  return (
    <Provider store={store}>
      <PostForm />
      <Posts />
    </Provider>
  );
}

export default App;
