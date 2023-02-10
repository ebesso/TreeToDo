import React from "react";
import { Task } from 'hooks/useApiGet'
import { Form } from 'react-bootstrap'
import { ThreeDotsVertical } from 'react-bootstrap-icons'

interface TaskProps {
    name: String,
    isCompleted: Boolean,
}

export default function TaskItem(props: TaskProps){

    function handleSettingsClicked(){
        console.log('Settings Clicked')
    }

    function handleTaskClicked(){
        console.log('Task clicked')
    }

    return (
        <Form.Group style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Form.Check>
                <Form.Check.Input />
                <Form.Check.Label onClick={handleTaskClicked} style={{cursor: 'pointer'}}>{props.name}</Form.Check.Label>
            </Form.Check>
            <ThreeDotsVertical onClick={handleSettingsClicked} style={{cursor: 'pointer'}} />
        </Form.Group>

    )
}