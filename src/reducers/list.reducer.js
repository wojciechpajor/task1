const listReducer = (state, {type, payload}) => {
    switch (type) {
        case"toogle":

            if (state[payload.id].type === "radio") {
                const newState = {...state};
                Object.keys(newState).forEach(key => {
                    if (newState[key].type === "radio") {
                        newState[key].open = false;
                    }
                })
                return {
                    ...newState,
                    [payload.id]: {...newState[payload.id], open: payload.open}
                }
            } else {
                return {
                    ...state,
                    [payload.id]: {...state[payload.id], open: payload.open}
                }
            }
        default:

    }
}

export default listReducer;