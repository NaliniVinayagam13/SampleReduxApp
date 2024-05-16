import { INCREMENT, DECREMENT } from "./actiontypes";

interface State {
    count: number;
}

const initialState: State = {
    count: 0
}

const rootReducers = (state = initialState, action: { type: string }) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default rootReducers;