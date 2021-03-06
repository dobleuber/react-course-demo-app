import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function couseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            return state.map(course => course.id !== action.course.id 
                ? course 
                : Object.assign({}, action.course));
            
        default: 
            return state;
    }
}