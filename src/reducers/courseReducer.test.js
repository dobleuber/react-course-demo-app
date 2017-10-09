import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {ttule: 'A'},
            {ttule: 'B'}
        ];

        const newCourse = {
            title: 'C'
        };

        const action = actions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
    });

    it('Should add course when passed UPDATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const course = {id: 'B', title: 'new title'};
        const action = actions.updateCourseSuccess(course);

        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id === course.id);
        const untouchedCourse = newState.find(a => a.id === 'A');

        expect(updatedCourse.title).toEqual('new title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});