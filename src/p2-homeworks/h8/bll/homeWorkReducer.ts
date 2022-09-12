import {UserType} from "../HW8";

type ActionsType = {
    type: string,
    payload: any
}

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    function compare (a: UserType, b: UserType): number {
        let aName = a.name
        let bName = b.name
        aName.toLowerCase()
        bName.toLowerCase()
        if (aName > bName) return action.payload === 'up' ? 1 : -1;
        if (aName < bName) return action.payload === 'up' ? -1 : 1;
        return 0
    }
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            switch (action.payload) {
                case 'up' : {
                    return newState.sort(compare)
                }
                case 'down' : {
                    return newState.sort(compare)
                }
                default: return state
            }
        }
        case 'check': {
            return state.filter(item => item.age >= action.payload)
        }
        default: return state
    }
}