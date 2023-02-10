import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { PlusLg } from "react-bootstrap-icons"

export default function TaskForm(){
    return (
        <Form style={{border: '1px lightgrey solid', borderRadius: '4px', marginBottom: '0.5em'}}>
            <InputGroup >
                <InputGroup.Text id="addon" style={{backgroundColor: 'white', border: 'none'}}><PlusLg /></InputGroup.Text>
                <Form.Control placeholder="Add new task" aria-describedby="addon" style={{border: 'none'}}/>
            </InputGroup>
        </Form>
    )
}