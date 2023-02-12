import React, { useState } from "react"
import { Form, InputGroup, Button, ButtonToolbar, Row, Col } from "react-bootstrap"
import { PlusLg } from "react-bootstrap-icons"

import * as yup from 'yup';


import { useFormik } from 'formik';

import './taskForm.css';

const taskSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().notRequired().max(100)
});

interface task {
    name: string,
    description: string
}

export default function TaskForm(){
    const onSubmitHandler = (data:task) => {
        console.log(data)
    }

    const formik = useFormik<task>({

        initialValues: {
            name: '',
            description: ''
        },
        onSubmit: onSubmitHandler,
        validationSchema: taskSchema

    });

    const [showForm, setShowForm] = useState(false);



    const onTextClick = () => {
        setShowForm(true);
    }

    const onCancel = () => {
        formik.resetForm();
        setShowForm(false);

    }



    return (
        <Form 
        style={{marginTop: '0.5em', border: showForm ? '1px grey solid' : 'none', borderRadius: '4px'}}
        onSubmit={formik.handleSubmit}
        noValidate>
            <Row>
                <Form.Group as={Col}>
                    <InputGroup>
                        {!showForm && 
                            <InputGroup.Text style={{backgroundColor: 'white', border: 'none'}}><PlusLg /></InputGroup.Text>
                        }
                        <Form.Control
                            placeholder="Add new task"
                            type="text"
                            style={{border: 'none'}}
                            onClick={onTextClick}
                            isInvalid={formik.errors.name ? true : undefined}
                            name="name"
                            onChange={formik.handleChange}

                        />
                        {showForm && formik.errors.name && 
                            <Form.Control.Feedback type="invalid" style={{margin: '0', marginLeft: '10px', fontSize: '12px'}}>{formik.errors.name}</Form.Control.Feedback>
                        }
                    </InputGroup>

                </Form.Group>
            </Row>

            {showForm && 
                <React.Fragment>
                    <Row>
                        <Col>
                            <InputGroup>
                                <Form.Control 
                                as="textarea"
                                placeholder="Description"
                                isInvalid={formik.errors.description ? true : undefined && formik.touched.description}
                                name="description"
                                onChange={formik.handleChange}
                                style={{border: 'none', resize: 'none', fontSize: '12px'}}
                                />
                                {showForm && formik.errors.description && formik.touched.description && 
                                    <Form.Control.Feedback type="invalid" style={{margin: '0', marginLeft: '10px', fontSize: '12px'}}>{formik.errors.description}</Form.Control.Feedback>
                                }                            
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonToolbar style={{margin: '0 10px 10px 10px', display: 'flex', justifyContent: 'right'}}>
                                <Button variant="outline-secondary" size="sm" onClick={onCancel}>Cancel</Button>
                                <Button variant="outline-success" style={{marginLeft: '10px'}} size="sm" type="submit">Create</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </React.Fragment>

            }
            </Form>

    )
}