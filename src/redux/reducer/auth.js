const initialState = {
    user:{}
}

export default function authReducer(state = initialState,action){
    switch(action.type){
        case 'SET_USER':
            return {...state, user:action.payload}
        default: return state;
    }
}
