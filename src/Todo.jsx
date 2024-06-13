import { useState } from "react";

export default function Todo() {
    let [tasks, setTasks] = useState(["Sample Task"]);
    let [newTasks, setNewTasks] = useState("");

    let updateTaskValue = (event) => {
        setNewTasks(event.target.value);
    }

    let addNewTask = () => {
        if (tasks[0] === "Sample Task") {
            // Replace "Sample Task" with the new task
            setTasks([newTasks, ...tasks.slice(1)]);
        } else {
            // Add the new task to the list
            setTasks([...tasks, newTasks]);
            setNewTasks("")
        }

        // setTasks([...tasks, newTasks]);
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