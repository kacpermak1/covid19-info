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