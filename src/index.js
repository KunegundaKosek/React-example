import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ShoppingList from './components/Task1/ShoppingList';
import AddSign from './components/Task2/AddSign';
import AddSign2 from './components/Task3/AddSign2';
import AddSign3 from './components/Task4/AddSign3';
import Copy from './components/Task5/Copy';
import Message from './components/Task6/Message';
import Click from './components/Task7/Click';
import CheckboxAgeConfirmation from './components/Task8/CheckboxAgeConfirmation';
import ShoppingCart from './components/Task9/ShoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ShoppingList />
    <AddSign />
    <AddSign2 />
    <AddSign3 btnTitle="Dodaj cyfrę" />
    <Copy />
    <Message />
    <Click result={10} />
    <CheckboxAgeConfirmation />
    <ShoppingCart />

  </React.StrictMode>
);


reportWebVitals();
