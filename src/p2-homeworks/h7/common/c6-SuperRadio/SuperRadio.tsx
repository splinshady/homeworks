import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, ReactFragment} from 'react'
import style from '../../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: JSX.Element[] = options ? options.map((option, index) => (
        <label className={style.label_option} key={name + '-' + index}>
            <input className={style.input_option}
                type={'radio'}
                name={name}
                onChange={onChangeCallback}
                value={option}
                checked={value === option}
            />
            <span className={style.span_option}>{option}</span>
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
