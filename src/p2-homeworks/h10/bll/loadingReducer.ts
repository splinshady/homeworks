export type LoadingACType = {
    type: 'SET-LOADER',
    isLoading: boolean
}
export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): initStateType => {
    switch (action.type) {
        case 'SET-LOADER': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {
        type: 'SET-LOADER',
        isLoading
    } as const
}