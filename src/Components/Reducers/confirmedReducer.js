const initState = {

    confirmed:0,
    britain:0,
    usa:0,
    italy:0,
    global:0,
    states:0,
    italy:0
 
 }
 
 const confirmedReducer = (state = initState, action) => {
 
    if (action.type === 'CONFIRMED') {
        return {
            ...state,
            confirmed: action.payload,
        }
    }

    if (action.type === 'CONFIRMED_BRITAIN'){
        return {
            ...state,
            britain: action.payload,
        }
    }

    if (action.type === 'CONFIRMED_GLOBAL'){
        return {
            ...state,
            global: action.payload,
        }
    }

    if (action.type === 'CONFIRMED_STATES'){
        return {
            ...state,
            states: action.payload,
        }
    }

    if (action.type === 'CONFIRMED_ITALY'){
        return {
            ...state,
            italy: action.payload,
        }
    }
    return state
 
 }
 
 export default confirmedReducer;