import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/welcomePage';
import FeedPage from './components/feedPage';
import NotFound from './components/notFound';
import Login from './components/login';
import SignUp from './components/signUp';

function App() {
  return (
    <section>
      <Routes>
        <Route exact path='/' element={<WelcomePage/>} />
        <Route exact path='/feed' element={<FeedPage/>}/>
        <Route exact path='/register' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route component={<NotFound/>}/>
      </Routes>
    </section>
  );
}

export default App;
