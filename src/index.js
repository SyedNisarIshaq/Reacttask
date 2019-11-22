import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Simpleform from './simpleform/sform';
// import Forms from './Forms_task/Forms';
// import Login from './loginform/Login';
import Callfunction from './calling_function/Callfunction';
import Textareabox from './textarea/textareavalidation';
import Todo from './todo_task/Todo';
import Sample from './sampletodo/sample';

ReactDOM.render(<Sample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
