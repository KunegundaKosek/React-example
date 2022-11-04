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
import Menu from './components/Task10/Menu';
import Login from './components/Task11/Login';
import Cantor from './components/Task12/Cantor';
import RandomText from './components/Task13/RandomText';
import Clicker from './components/Task14/Clicker';
import Users from './components/Task15/Users';
import FormValidation from './components/Task16/FormValidation';
import ToDoApp from './components/Task17/ToDoApp';


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
    <Menu />
    <Login />
    <Cantor />
    <RandomText />
    <Clicker />
    <Users />
    <FormValidation />
    <ToDoApp />

  </React.StrictMode>
);


reportWebVitals();
