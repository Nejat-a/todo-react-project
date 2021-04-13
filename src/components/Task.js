import { FaTimes } from 'react-icons/fa'
export const Task = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className={`task ${tasks.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(tasks.id)}>
            <h6>{tasks.title} <FaTimes style={{ color: "#ef4f4f" }} onClick={() => onDelete(tasks.id)} /></h6>
            <p>{tasks.date}</p>
        </div>
    )
}
