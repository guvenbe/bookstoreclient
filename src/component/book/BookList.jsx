import React from "react";
import PropTypes from "prop-types";
import {Box} from "@mui/material";
import makeStyles from "./BookStyles";
import BookListItem from "./BookListItem";

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired,
    }).isRequired,
};


const BookList = ({books}) => {
    const classes = makeStyles();
    //console.log("The books:" + books.map((book)=>book.id))
    return(
        <Box className={classes.bookList} ml={5}>
            {books.map((book) => (
                <BookListItem book ={book} key={book.id}/>
            ))}
        </Box>
    );
}

BookList.prototype = propTypes;
export default BookList;