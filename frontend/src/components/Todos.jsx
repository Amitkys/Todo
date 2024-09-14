// Todos.jsx
export function Todos({ todos }) {
    return (
        <div>
            {todos.length > 0 ? todos.map(todo => (
                <div key={todo._id}> {/* Use unique key prop */}
                    <h1>{todo.title}</h1>
                    <h4>{todo.description}</h4>
                    <button>{todo.isCompleted ? "Done" : "Mark as done"}</button>
                </div>
            )) : (
                <div>No todos available</div>
            )}
        </div>
    );
}
