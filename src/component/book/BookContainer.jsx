import React, {useEffect} from "react";
import {Box} from "@mui/material";
import { Skeleton } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {getBooksAction} from "../../module/book/bookAction";
import {getbookSelector, getbookPromiseSelector} from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";
import BookList from "./BookList";

const BookConstainer =() => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getBooksAction());
    }, [dispatch])

    const books = useSelector(getbookSelector);
    const bookPromise =useSelector(getbookPromiseSelector)


    // console.log("The books2:" + books.map((book)=>book.id))
    const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                {bookPromise.isPending &&(
                    <Box ml={5}>
                        <Skeleton data-testid="book-loader"
                                  variant="rect"
                                  animation="pulse"
                                  width="80%"
                                  height={200}/>}
                    </Box>
                )}
                {bookPromise.isErrorOcurred &&(
                    <div data-testid="book-error-message"> Error Message ..</div>
                )}
                <BookList books={books}/>
            </Box>
        </Box>
    );
};

export default BookConstainer;