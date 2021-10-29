import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import { nanoid } from 'nanoid'
import {Task, TaskProps} from '../types'

type Props= TaskProps & {}
    




const ListScreen: React.FC<Props> =({tasks, setTasks, updateTaskCompletion})=>{

const [newTaskLabel, setNewTaskLabel] = useState('');

const handleNewTaskLabelChange = (e:ChangeEvent <HTMLInputElement>) =>
setNewTaskLabel(e.target.value)

const handleNewTaskKeyPress = (e:KeyboardEvent <HTMLInputElement>) => {
    if (e.key=== 'Enter' && newTaskLabel !== '') {
         setTasks((tasks) => 
            [
                ...tasks,
                 {id: nanoid(), label: newTaskLabel, isComplete: false}
                ]);
    setNewTaskLabel('');
    }
};


const handleTaskCompleteChange =
(Task: Task) => (e:ChangeEvent <HTMLInputElement>) => {
    updateTaskCompletion(
        Task.id, e.target.checked);
}





const handleClearClick =() => 
setTasks((tasks)=> tasks.filter((task)=> !task.isComplete))

console.log(tasks)


    return(
        <div>
            <div>
                {tasks.map((task) => (<li key={task.id}>
                    <input type="checkbox" checked={task.isComplete} onChange={handleTaskCompleteChange(task)}/>
                    
                    {task.label}

                    
                    </li>))}
                </div>
            <input value={newTaskLabel} onChange={handleNewTaskLabelChange} onKeyPress={handleNewTaskKeyPress}/>
<div>

  <button onClick={handleClearClick}> Clear Completed Tasks</button>  
</div>

        </div>
    )
}


export default ListScreen