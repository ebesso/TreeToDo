import React, { useState } from "react"

import TaskList from "pages/ListView/components/TaskList/TaskList"
import TaskForm from "pages/ListView/components/TaskForm/TaskForm"
import Path from 'pages/ListView/components/Path/Path'

import { Row, Col } from "react-bootstrap"

export default function TableViewPage(){

    const path = ['Root', 'Quiz', 'Read']

    return (
        <React.Fragment>
            <Row>

                <Col md={12}>
                    <Path path={path} />
                    <hr style={{marginBottom: '0.5em', marginTop: '0'}}/>
                    <TaskList />
                    <TaskForm />

                </Col>
            </Row>

        </React.Fragment>
    )
}