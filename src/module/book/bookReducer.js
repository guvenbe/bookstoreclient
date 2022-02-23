
export const INITIAL_BOOK_REDUCER_STATE = {
    books: [],
    promise:{
        isPending: false,
        isFulfilled: false,
        isErrorOcurred: false
    }
}
const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {
    // console.log(state)
    switch (action.type){
        case 'BOOKLIST': {
            return {
                ...state,
                books: action.payload,
            }
        }
        case 'BOOKLISTPENDING' :{
            return {
                ...state,
                promise: {isPending: true, isFulfilled: false, isErrorOcurred: false}
            }
        }
        case 'BOOKLISTERROR' :{
            return {
                ...state,
                promise: {isPending: false, isFulfilled: false, isErrorOcurred: true}
            }
        }
        case 'BOOKLISTFULFILLED' :{
            return {
                ...state,
                promise: {isPending: false, isFulfilled: true, isErrorOcurred: false}
            }
        }
        default: {
            return state;
        }
    }
}

export default bookReducer;