export const TaskList = ({ task, deleteTask, completeTask }) => {
    if (!Array.isArray(task) || task.length === 0) {
        return <div>No hay tareas cargadas.</div>;
    }

    return (
        <ul>
            {task.map((tasks) => (
                <li
                    key={tasks.id}
                    style={{
                        textDecoration: tasks.completed ? "line-through" : "none",
                        color: tasks.completed ? "#aaa" : "#000"
                    }}
                >
                    <span onClick={() => toggleTask(tasks.id)}>{tasks.titulo}</span>
                    <button onClick={() => deleteTask(tasks.id)}>Eliminar</button>
                    <button onClick={() => completeTask(tasks.id)} style={{ marginLeft: '10px' }}>
                        {tasks.completed ? "Incompleta" : "Completada"}
                    </button>
                </li>
            ))}
        </ul>
    );
};
