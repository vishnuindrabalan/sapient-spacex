import React, { useState } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import Button from '@material-ui/core/Button';

const Home = props => {
  const serverTodos = useServerData(data => {
    return data.todos || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(serverTodos);

  const buttonClick = () => {
    props.history.push({
      pathname: '/',
      search: '?query=abc',
      state: { detail: 'some_value' }
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={buttonClick}>
        sdssddsdsd
      </Button>
      <h1>Home page</h1>

      {/* <form
        onSubmit={e => {
          e.preventDefault();

          const newTodo = {
            text
          };

          api.todos.create(newTodo).then(res => {
            setTodos([...todos, res]);
            setText('');
          });
        }}
      >
        <label htmlFor="todo">Add a todo</label>
        <br />
        <input
          id="todo"
          type="text"
          value={text}
          autoComplete="off"
          onChange={e => setText(e.target.value)}
        />
      </form> */}

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.flight_number}</li>
        ))}
      </ul>
    </div>
  );
};

Home.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default Home;
