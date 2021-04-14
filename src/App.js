import { Button } from './components/Button';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { useState } from 'react';
import { AddTask } from './components/AddTask';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [showFrom, setShowFrom] = useState(false);
  const [tasks, setTasks] = useLocalStorage("tasks", []);


  //toggleReminder

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  //Add task
  const toggleForm = () => {
    setShowFrom(!showFrom)
  }

  const addTask = (data) => {
    const id = Math.floor(Math.random() * 90000) + 1;
    const newTask = { ...data, id }
    setTasks([...tasks, newTask])

  };
  return (
    <div className="container">
      {showFrom && <AddTask onAdd={addTask} />}
      <Header content="Tasks" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
      <Button text={showFrom ? "Close Form" : "Add new"} style="add-btn" onClick={toggleForm} />
    </div>
  );
}

export default App;
