import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import data from './db.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

let text = "My site";
let slogan = "I am learning React";

let nav = {"Главная": "/index", "Новости": "/news", "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts"};
let db = data.people;

let copy = "Copyright - 2026"

root.render(
  <React.StrictMode>
    <App text={text} slogan={slogan} navigation={nav} db={db} copy={copy}/>
  </React.StrictMode>
);