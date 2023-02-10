import React, { useState } from "react"

import TaskList from "pages/ListView/components/TaskList/TaskList"
import TaskForm from "pages/ListView/components/TaskForm/TaskForm"
import Settings from 'pages/ListView/components/Settings/Settings'

import { Row, Col } from "react-bootstrap"

export default function TableViewPage(){

    const [showSettings, setShowSettings] = useState<Boolean>(true);

    return (
        <React.Fragment>
            <Row>

                <Col md={ showSettings ? 8 : 12}>
                    <h1 style={{marginBottom: '0.5em'}}>ToDo</h1>

                    <TaskForm />
                    <TaskList />
                </Col>
                {showSettings && 
                    <Col md={4}>
                        <Settings />
                    </Col>
                }

            </Row>

        </React.Fragment>
    )
}