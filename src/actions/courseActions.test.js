import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Here is an example call to nock
        // nock('http://mytesturl.com')
        //     .get('/courses')
        //     .reply(200, {body: {courses: [{id: 1, name:'course name'}]}});

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id:'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses:[]}, expectedActions);
        store.dispatch(courseActions.loadCourses())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
                done();
            });
    });
});