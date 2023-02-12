import React from "react";
import { Task } from 'hooks/useApiGet'
import { Form } from 'react-bootstrap'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import { useState } from "react";

interface TaskProps {
    name: String,
    isCompleted: Boolean,
}

export default function TaskItem(props: TaskProps){

    const [showDots, setShowDots] = useState(false);

    function handleSettingsClicked(){
        console.log('Settings Clicked')
    }

    function handleTaskClicked(){
        console.log('Task clicked')
    }

    function onMouseEnter(){
        setShowDots(true);
    }

    function onMouseLeave(){
        setShowDots(false);
    }


    return (
        <Form.Group 
        style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <Form.Check>
                <Form.Check.Input />
                <Form.Check.Label onClick={handleTaskClicked} style={{cursor: 'pointer'}}>{props.name}</Form.Check.Label>
            </Form.Check>
            {showDots && 
                <ThreeDotsVertical onClick={handleSettingsClicked} style={{cursor: 'pointer'}} />   
            }
        </Form.Group>

    )
}