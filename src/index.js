import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'
import Header from './structure/Header'; 
import Main from './structure/Main';
import Gallery from './components/Gallery';
import Footer from './structure/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Gallery/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
