import React from "react"
import PathElement from "../PathElement/PathElement"

interface pathProps{
    path: string[];
}

export default function Path(props: pathProps){
    return(
        <h4 style={{cursor: 'default'}}>
            {props.path.map((item) => 
            <React.Fragment>
                <PathElement name={item}/>/
            </React.Fragment>
            )}
        </h4>
    )
}