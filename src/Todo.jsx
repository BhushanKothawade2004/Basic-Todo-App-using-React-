import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [tasks, setTasks] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTasks, setNewTasks] = useState("");

    let updateTaskValue = (event) => {
        setNewTasks(event.target.value);
    }

    let addNewTask = () => {
        if (tasks.length === 1 && tasks[0].task === "sample task") {
            // Replace "sample task" with the new task
            setTasks([{ task: newTasks, id: uuidv4() }]);
        } else {
            // Add the new task to the list
            setTasks([...tasks, { task: newTasks, id: uuidv4() }]);
        }
        setNewTasks("");
    }

     return (
        <div>
            <h2>Todo App</h2>
            <br />
            <input type="text" placeholder="Add a new Task" value={newTasks} onChange={updateTaskValue}/>
            <br /> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <hr />
            <br /><br />
            <h3>Tasks To-do Today</h3>
            <ol>
                {tasks.map((tasks) => (
                    <li key={tasks.id}>{tasks.task}</li>
                ))}
            </ol>
        </div>
     );
}