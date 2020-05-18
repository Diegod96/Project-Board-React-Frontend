import {GET_PROJECT_TASKS} from "../actions/types";

const initialState = {
    project_tasks: []
};

export default function (state = initialState, action) {
    if (action.type === GET_PROJECT_TASKS) {
        return {
            ...state,
            project_tasks: action.payload
        };
    } else {
        return state;
    }
}
