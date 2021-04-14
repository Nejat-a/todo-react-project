import { useState } from 'react'
import { Button } from './Button'
import { Header } from './Header';

export const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);
    const [taskError, setTaskError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        if (title.trim().length < 2) {
            setTaskError(true);
            return;
        }
        if (!date) {
            setDateError(true);
            return;
        }

        onAdd({ title, date, reminder });

        setTitle("");
        setDate("");
        setReminder(false);
        setTaskError(false);
        setDateError(false);
    }
    return (
        <form onSubmit={submitForm}>
            <Header content="Add task" />
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <span className="taskError">{taskError ? "Task name should be at least 2 characters" : ""}</span>
            </div>

            <div className="form-control">
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <span className="dateError">{dateError ? "Date should no be empty" : ""}</span>
            </div>
            <div className="form-control">
                <label>Reminder </label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <Button text="Save task" style="btn full-width" />
        </form>
    )
}
