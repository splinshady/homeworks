import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import style from '../../HW11.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number],
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, onChange, value, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value, 100])
    }
    return (
        <div className={style.double_input_container}>
            <input
                type={'range'}
                className={`${style.thumb} ${style.thumb_zindex_3}`}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

            <input
                type={'range'}
                className={`${style.thumb} ${style.thumb_zindex_4}`}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
