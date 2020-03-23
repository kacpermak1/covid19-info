export const loadDeaths = (data) => {
    return {
        type: "DEATHS",
        payload: data
    }
}

export const loadBritainDeaths = (data) => {
    return {
        type: "DEATHS_BRITAIN",
        payload: data
    }
}

export const loadGlobalDeaths = (data) => {
    return {
        type: "DEATHS_GLOBAL",
        payload: data
    }
}

export const loadStatesDeaths = (data) => {
    return {
        type: "DEATHS_STATES",
        payload: data
    }
}

export const loadItalyDeaths = (data) => {
    return {
        type: "DEATHS_ITALY",
        payload: data
    }
}

export const loadSelectedDeaths = (data) => {
    return {
        type: "DEATHS_SELECTED",
        payload: data
    }
}

export const loadConfirmed = (data) => {
    return {
        type: "CONFIRMED",
        payload: data
    }
}

export const loadBritainConfirmed = (data) => {
    return {
        type: "CONFIRMED_BRITAIN",
        payload: data
    }
}

export const loadGlobalConfirmed = (data) => {
    return {
        type: "CONFIRMED_GLOBAL",
        payload: data
    }
}
export const loadStatesConfirmed = (data) => {
    return {
        type: "CONFIRMED_STATES",
        payload: data
    }
}

export const loadItalyConfirmed = (data) => {
    return {
        type: "CONFIRMED_ITALY",
        payload: data
    }
}

export const loadSelectedConfirmed = (data) => {
    return {
        type: "CONFIRMED_SELECTED",
        payload: data
    }
}

export const loadCountries = (data) => {
    return {
        type: "LOAD_COUNTRIES",
        payload: data
    }
}

export const selectedCountryName = (data) => {
    return {
        type: 'SELECTED_COUNTRY_NAME',
        payload: data
    }
}

