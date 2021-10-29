export type Task ={
    id: string,
    label: string,
    isComplete: boolean,}


export type TaskProps= {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    updateTaskCompletion: (taskID: string, isComplete: boolean) => void;
}