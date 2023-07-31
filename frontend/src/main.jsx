import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInSide from './signin';
import Landingpage from './landingpage';
import SearchPage from './joblistings';
import CreateResume from './resume';
import MyComponent from './postingmain';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignInSide/>}/>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/joblistings" element={<SearchPage/>}/> 
      <Route path="/resume" element={<CreateResume/>}/> 
      <Route path="/postingmain" element={<MyComponent/>}/> 


    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

