import React from "react";

import { ButtonToolbar, Card, Form, InputGroup, Button } from "react-bootstrap";

export default function Settings(){
    return(
        <Card style={{height: '100%', backgroundColor: '#F6F6F6', borderRadius: '10px', position: 'relative', border: 'none'}}>
            <h3 style={{margin: '15px 15px 15px 15px'}}>Task:</h3>
            <Form style={{margin: '0 10px 0 10px'}}>
                <InputGroup>
                    <Form.Control placeholder="Task 1" aria-describedby="addon" style={{backgroundColor: '#F5F5F5'}} />
                </InputGroup>
                <ButtonToolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant="light">Delete Task</Button>
                    <Button>Save Changes</Button>
                </ButtonToolbar>
            </Form>
        </Card>
    )
}