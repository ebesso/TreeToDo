import { useEffect, useState } from "react"

export type ReadTasksResponse = {
    loading: Boolean,
    tasks: Task[]
}

export type ReadTaskResponse = {
    loading: Boolean,
    task: Task
}

export type Task = {
    name: String,
    isCompleted: Boolean,
    children: String[],
    parent: String
}

export type PopulatedTask = {
    task: Task,
    children: [Task]
}

export const useGetRoots = (): ReadTasksResponse => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    useState(() => {
        setTasks([
            {
                name: 'Task 1',
                isCompleted: false,
                children: ['Child 1'],
                parent: ''
            },
            {
                name: 'Task 2',
                isCompleted: false,
                children: ['Child 1'],
                parent: ''
            },
            {
                name: 'Task 3',
                isCompleted: false,
                children: ['Child 1'],
                parent: ''
            }
        ])
    });

    return {loading, tasks}
}