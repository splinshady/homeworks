import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW10.module.css'
import loader from './bll/yH.gif'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)),2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            <div className={style.container}>
                {loading
                    ? (
                        <div><img className={style.loader} src={loader} alt="loader"/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
