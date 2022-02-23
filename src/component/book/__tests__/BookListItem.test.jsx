import React from "react";
import {getByText, render} from "@testing-library/react";
import BookListItem from "../BookListItem";

describe('BookListItem', ()=>{
    const book = {
        id: 1,
        title: 'test title',
        description: 'desc',
        releaseYear: 2019,
    };
    it('should render booklistitem without error', ()=>{

        const {getByText, getAllByText} = render(<BookListItem book={book}/>)
        expect(getAllByText("test title")[0]).toBeInTheDocument(); // 0 means get first item on the list
        expect(getByText('desc')).toBeInTheDocument();
        expect(getByText('2019')).toBeInTheDocument();


    })
})