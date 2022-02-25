import bookReducer, {INITIAL_BOOK_REDUCER_STATE} from "../bookReducer";

describe('bookReducer', () => {
    it('should return right new state', () => {

    })
    it('should return right new state for BOOKSBYTITLE Action', () => {
        const action = {

            type: 'BOOKSBYTITLE',
            payload: [
                {
                    id: 1,
                    title: 'second book',
                    description: 'des',
                    releaseYear: 2018
                },
            ],

        };
        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        expect(newState).toEqual({
                books: [
                    {
                        id: 1,
                        title: 'second book',
                        description: 'des',
                        releaseYear: 2018
                    },
                ],
                promise: {
                    isPending: false,
                    isFulfilled: false,
                    isErrorOcurred: false
                },
            },
        )
    });
})