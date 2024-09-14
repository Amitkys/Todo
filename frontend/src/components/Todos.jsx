// object dis-structuring by : {todos}
export function Todos({ todos }){
    return(
        <div>
            {todos.map(function(todo){
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h4>{todo.description}</h4>
                        <button>{todo.isCompleted == true? "Done":"mark as done"}</button>
                    </div>
                );
            })}
            
        </div>
    );

}

