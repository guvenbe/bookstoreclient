import React from "react";
import {Box, Paper} from "@mui/material";
import styles from "./BookStyles";

const BookFilter = () =>{
    const classes = styles();
    return(
        <Box className={classes.bookFilterPaper}>
            <Paper className={classes.bookFilterPaper}>
                book filter
            </Paper>
        </Box>
    );
}

export default BookFilter;