import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType,
    deleteAffairCallback: (_id: number) => void,
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    return (
        <div>
            <span>{props.affair.name}</span><span> {props.affair.priority} </span>
            <button onClick={() => {deleteCallback(props.affair._id)}}>delete</button>
        </div>
    )
}

export default Affair
