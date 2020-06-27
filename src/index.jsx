import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from "redux-thunk";
import {Helloworld} from './ts/Helloworld'
import {TodoItemCollection} from "./ts/TodoItemCollection";
import {TodoItem} from "./ts/TodoItem";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
      <Provider store={store} >
          <App />
      </Provider>,
  document.getElementById('root')
);

const h = new Helloworld("KKK");
h.greeting();

const todos = new TodoItemCollection("name1", [
    new TodoItem("id1", "task1", false),
    new TodoItem("id2", "task2", false),
    new TodoItem("id3", "task3", false),
]);
todos.addItem(new TodoItem("id4", "task4", false));
console.log(todos);
todos.markDone("id2");
console.log(todos.getItemById("id2"));