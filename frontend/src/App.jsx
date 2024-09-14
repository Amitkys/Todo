import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
function App(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todo')
    .then(async(res) => {
      const data = await res.json();
      // console.log('data is',data);
      setTodos((data.todos));
    })
  }, []);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
