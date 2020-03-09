import React from 'react';
import './App.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Mypage from './pages/Mypage';

function selectPage(_mode: string) {
  let page: any;
  if(_mode === 'Home') {
    page = <Home></Home>;
  } else if (_mode === 'Sign in') {
    page = <Signin></Signin>;
  } else if (_mode === 'Sign up') {
    page = <Signup></Signup>;
  } else if (_mode === 'My page') {
    page = <Mypage></Mypage>
  }
  return page;
}

function App(this: any) {
  const _mode = 'Home';
  const _page = selectPage(_mode);

  return (
    <div className="App">
      <Header></Header>
      {_page}
    </div>
  );
}

export default App;
