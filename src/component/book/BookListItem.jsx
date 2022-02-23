import React from "react";
import PropTypes from "prop-types";
import makeStyles from './BookStyles';
import {Avatar, Box, Paper, Typography} from '@mui/material'
const propTypes ={
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired,
    }).isRequired
}

const BookListItem =({book}) =>{
    const classes = makeStyles();
    return(
        <Box mb = {2}>
            <Paper elevation={2} className={classes.bookListItemPaper}>
                <Avatar className={classes.bookImage} variant="square">
                    {book.title}
                </Avatar>
                <Box ml={1}>
                    <Typography variant="h5">{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.releaseYear}</Typography>
                </Box>
            </Paper>
        </Box>
    );
}

BookListItem.prototype = propTypes;
export default BookListItem;