import getBooksService from './bookService';


const getBooksAction = () => async (dispatch) => {
    try {
        const books = await getBooksService();
        //All reducer will be notified
        //The one with matching type will be executed
        dispatch({type: 'BOOKLISTPENDING'})
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        })
        dispatch({type: 'BOOKLISTFULFILLED'})
    }catch (error){
        console.log(error)
        dispatch({type: 'BOOKLISTERROR'})
    }
}

export default getBooksAction;
