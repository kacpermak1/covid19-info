const initState = {

    deaths:0,
    britain:0,
    usa:0,
    italy:0,
    global:0,
    states:0,
    italy:0
 
 }
 
 const deathsReducer = (state = initState, action) => {
 
    if (action.type === 'DEATHS') {
        return {
            ...state,
            deaths: action.payload,
        }
    }
    
    if (action.type === 'DEATHS_BRITAIN'){
        return {
            ...state,
            britain: action.payload,
        }
    }

    if (action.type === 'DEATHS_GLOBAL') {
        return {
            ...state,
            global: action.payload,
        }
    }

    if (action.type === 'DEATHS_STATES') {
        return {
            ...state,
            states: action.payload,
        }
    }

    if (action.type === 'DEATHS_ITALY') {
        return {
            ...state,
            italy: action.payload,
        }
    }
    return state
 
 }
 
 export default deathsReducer;