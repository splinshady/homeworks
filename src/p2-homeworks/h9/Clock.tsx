import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const appearDateStyle = show ? style.appear_date : style.disappear_date

    const addZero = (date: number) => {
        return date < 10 ? '0' + date : date
    }
    const stringTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    const stringDate = `${addZero(date.getDate())}:${addZero(date.getMonth() + 1)}:${addZero(date.getFullYear())}`

    return (
        <div className={style.container}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={`${style.date} ${appearDateStyle}`}>
                    {stringDate}
                </div>
            )}

            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
