import { ReadTasksResponse, useGetRoots } from "hooks/useApiGet";
import React from "react";
import { ListGroup } from "react-bootstrap";

import TaskItem from 'pages/ListView/components/TaskItem/TaskItem';


export default function TaskList(){
    const data: ReadTasksResponse = useGetRoots();
    return (
        <React.Fragment>
            <ListGroup>
                {data.tasks.map((task, i) => 
                    <ListGroup.Item style={i < data.tasks.length - 1 ? {borderWidth: '0 0 1px 0'} : {border: 'none'}}>
                        <TaskItem name={task.name} isCompleted={task.isCompleted} />
                    </ListGroup.Item>
                )}
            </ListGroup>
        </React.Fragment>
    )
}