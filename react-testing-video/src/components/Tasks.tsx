import { useState } from "react";   
import axios from "axios";
import Button from "./Button";

interface Task{
    id: string;
    title: string;
}

const Tasks = () => {
    const [task, setTask] = useState<Task[]>([]);//Sinalizo q e um array

    const handClick = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        setTask(data);
    }

    return (
        <>
        <h1>Tasks from API</h1>
        <Button disabled={false} onClick={handClick}> Get Tasks from API</Button>
        {task.map((task) => (
            <p id={task.id}>{task.title}</p>
        ))}
        </>
        
    )
}

export default Tasks