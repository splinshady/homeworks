import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: Array<UserType>
    inputEnterHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users,inputEnterHandler}
) => {
    const inputClass = error ? s.error : ''
    const errorMessageStyle = error ? s.span_error_on : s.span_error_off
    const usersList = users.map(user => <li key={user._id}>{user.name}</li>)

    return (
        <div>
            <div className={s.input_container}>
                <input value={name} onChange={setNameCallback} onKeyDown={inputEnterHandler} className={`${s.input} ${inputClass}`}/>
                <span className={`${s.span_error} ${errorMessageStyle}`}>{error}</span>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <ul>
                {usersList}
            </ul>
        </div>
    )
}

export default Greeting
