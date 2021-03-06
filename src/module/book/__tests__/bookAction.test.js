import configureStore from 'redux-mock-store';
import reduxThunk from "redux-thunk";
import axios from "axios";
import {getBooksAction, getBooksByTitle} from "../bookAction";

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe('BookActions', () => {
    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2018
            }]
        }))
    })

    it('should able to dispatch success action', async () => {
        const store = mockStore({});


        await store.dispatch(getBooksAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2018
            }]
        })
    });


    it('should be able dispatch book by title action', async () => {
        const store = mockStore({});
        await store.dispatch(getBooksByTitle('test title'));
        const actions = store.getActions()
        //console.log(actions)
        expect(actions.length).toEqual(3);

        expect(actions[1]).toEqual({
            type: 'BOOKSBYTITLE',
            payload: [
                {
                    id: 1,
                    title: 'test title',
                    description: 'des',
                    releaseYear: 2018
                }
            ]
        })
    })
    it('should be able to dispatch error action from getBooksByTitle', async () =>{
        const store = mockStore({})
        axios.get.mockImplementation(() => {
            throw new Error();
        })
        await store.dispatch(getBooksByTitle('test title'))
        const actions = store.getActions();
        expect(actions.length).toEqual(2)
        expect(actions[1]).toEqual({
            type: 'BOOKLISTERROR'
        })
    })
    it('should be able to dispatch error action from getActions',
        async ()=>{
        const store = mockStore({})
         axios.get.mockImplementation(() =>{
             throw new Error();
         });
        await store.dispatch(getBooksAction());
        const actions =store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: 'BOOKLISTERROR'
        })

    });
});