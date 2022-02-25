import React, {useState} from "react";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import styles from "./BookStyles";
import {getBooksByTitle} from "../../module/book/bookAction";
import {useDispatch} from "react-redux";

const BookFilter = () => {
    const classes = styles();
    const [searchText, setSearchtext] = useState('')
    const dispatch = useDispatch(getBooksByTitle())
    const handleSearchChange =event => setSearchtext(event.target.value);
    const handleSearchClick = () => {
        dispatch(getBooksByTitle(searchText))
    };


    return (
        <Box className={classes.bookFilterPaper}>
            <Paper className={classes.bookFilterPaper}>
                <Typography>Search Books Filters</Typography>
                <Box paddingTop={3} marginBottom={2}>
                    <TextField
                        placeholder='Enter book title'
                        id='book-search'
                        data-testid='book-title-input'
                        label='Enter book title'
                        variant='outlined'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </Box>
                <Button onClick={handleSearchClick}
                        variant='contained' color='primary'>Search</Button>
            </Paper>
        </Box>
    );
}

export default BookFilter;