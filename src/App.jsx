import { useState } from 'react'
import "./App.css"
import Todo from './components/Todo.jsx';
import TodoForm from './components/TodoForm.jsx';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "As tarefas apareceram aqui depois de criadas",
      category: "Aqui ficará a categoria",
      isCompleted: false,
    },
  
  ])
  
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    },
    ];
    //atualizar o estado dos todos com os new todos
    setTodos(newTodos)
  };
//usa-se o id para remover os itens, já que o id pe unico
  const removeTodo = (id) => {
    const newTodos = [...todos]
    //irá filtrar po id e excluir o que tiver id correspondente
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
    //o todo que tiver o id diferente será retornado, o que for igual será retornado como nulo
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
  //se o id for IGUAL, o iscompleted será mudado para o contrário, descompletando a tarefa
  //se naõ for, retorna o todo normal
  //esqueci dos
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }


  return (
  <div className='app'>
  <h1>Lista de Tarefas</h1>
  <Search search={search} setSearch={setSearch} />
  {/*atualizar os props de Filter*/}
  <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
  <div className='todo-list'>   
    {todos.filter((todo) => {
// função ternária não deu certo aqui
        if (filter === "All") {
          return true
        } else if (filter === "Completed") {
          return todo.isCompleted;
        } else {
          return !todo.isCompleted;
        }
      }).filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
      .map((todo) => (
//a propriedade Todo tem o valor de todo {objeto}
//quando se repete um componente, é preciso adicionar a prop "key"
      <Todo 
      key={todo.id} 
      todo ={todo} 
      removeTodo ={removeTodo} 
      completeTodo = {completeTodo} 
      />
    ))}
  </div>
  {/*a função addTodo é passada como propriedade pro form*/}
  <TodoForm addTodo={addTodo} />
 </div>
  )
}

export default App
