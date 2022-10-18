import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { ContactCard } from './contact-card';
import { Blog1 } from './Blog'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Navbar />
    <Blog1 />
    <ContactCard />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
