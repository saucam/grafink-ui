const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            console.log(state.address);
            return {
                ...state,
                address: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;