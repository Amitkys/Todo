import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todos from backend
        fetch('http://localhost:3000/todo')
        .then(async (res) => {
            const data = await res.json();
            setTodos(data.todos); // Update state with fetched todos
        })
        .catch(err => console.error('Error fetching todos:', err));
    }, []); // Empty dependency array means this runs once on component mount

    // Function to add new todo (to be passed to CreateTodo)
    const addTodo = (newTodo) => {
        
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <div>
            <CreateTodo addTodo={addTodo} /> {/* Pass addTodo function */}
            <Todos todos={todos} /> {/* Display todos */}
        </div>
    );
}

export default App;
