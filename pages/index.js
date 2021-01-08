import { useState } from 'react';

function index() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([input, ...todoList]);
    setInput('');
  };

  return (
    <div>
      <h1>TodoLuby</h1>

      <form>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Digite uma tarefa'
        />
        <button onClick={handleSubmit}>Adicionar</button>
      </form>

      <div>
        <ul>
          {todoList.length >= 1
            ? todoList.map((todo, id) => {
                return <li key={id}>{todo} </li>;
              })
            : 'Adicione um item'}
        </ul>
      </div>
    </div>
  );
}
export default index;
