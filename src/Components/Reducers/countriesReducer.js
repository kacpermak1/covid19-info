const initState = {

   countries:[],
   selectedCountry:''
 
 }
 
 const countriesReducer = (state = initState, action) => {
 
    if (action.type === 'LOAD_COUNTRIES') {
        return {
            ...state,
            countries: action.payload,
        }
    }

    if (action.type === 'SELECTED_COUNTRY_NAME') {
        return {
            ...state,
            selectedCountry: action.payload,
        }
    }

    return state
 
 }
 
 export default countriesReducer;