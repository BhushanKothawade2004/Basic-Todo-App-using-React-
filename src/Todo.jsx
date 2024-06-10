import { useState } from "react";

export default function Todo() {
    let [tasks, setTasks] = useState(["Sample Task"]);
    let [newTasks, setNewTasks] = useState("");

    let updateTaskValue = (event) => {
        setNewTasks(event.target.value);
    }

    let addNewTask = () => {
        
        setTasks([...tasks, newTasks]);
        setNewTasks("")
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
                {tasks.map((task) => (
                    <li>{task}</li>
                ))}
            </ol>
        </div>
     );
}