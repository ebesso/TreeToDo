import React from "react";

import './pathElement.css';

interface PathElementProps{
    name: string;
}

export default function PathElement(props: PathElementProps){
    return(
        <span>{props.name}</span>
    )
}