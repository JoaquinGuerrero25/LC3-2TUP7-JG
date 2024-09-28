import { useState } from "react";

export const TaskInput = ({ addTask }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Nueva Tarea"
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
                required
            />
            <button type="submit">Agregar</button>
        </form>
    );
};