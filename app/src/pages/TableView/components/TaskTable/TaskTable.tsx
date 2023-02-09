import { ReadTasksResponse, useGetRoots } from "hooks/useApiGet";
import React from "react";
import { Table, Button, Form } from "react-bootstrap";


export default function TaskTable(){
    const data: ReadTasksResponse = useGetRoots();
    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data.tasks.map((task, i) =>
                    <tr>
                        <td><Button variant="none">{task.name}</Button></td>
                        <td><Form.Check reverse={true}></Form.Check></td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}