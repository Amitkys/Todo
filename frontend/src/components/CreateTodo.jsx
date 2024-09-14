import { useState } from "react";

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateTodo = async () => {
        const todo = {
            title: title,
            description: description,
            isCompleted: false, // Assuming new todos are not completed initially
        };

        try {
            const response = await fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });

            if (response.ok) {
                const newTodo = await response.json();
                addTodo(todo); // Add the new todo to the list
                setTitle('');
                setDescription('');
                alert('todo is created');
            } else {
                alert('Failed to create todo');
            }
        } catch (e) {
            console.error('Error while creating todo', e);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write Todo"
            />
            <br />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <br />
            <button onClick={handleCreateTodo}>Create Todo</button>
        </div>
    );
}
