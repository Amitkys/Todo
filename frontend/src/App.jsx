import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
function App(){
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: 'this is title',
          description: 'bla bla bla bla bla',
          isCompleted: true
        }
      ]}></Todos>
    </div>
  )
}

export default App
