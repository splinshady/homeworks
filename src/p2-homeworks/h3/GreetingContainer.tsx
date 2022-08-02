import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== ' ') {
            setError('')
            setName(e.currentTarget.value)
        } else {
            setError('name is empty')
        }
    }
    const addUser = () => {
        if (name.length > 0) {
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName('')
        } else {
            setError('name is empty')
        }
    }
    const inputEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') addUser()
    }

    const totalUsers = users.length

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            inputEnterHandler={inputEnterHandler}
        />
    )
}

export default GreetingContainer
