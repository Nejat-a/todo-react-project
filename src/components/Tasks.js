import { Task } from './Task'

export const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="task-container">
            {tasks.map(task => (
                <Task tasks={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}
