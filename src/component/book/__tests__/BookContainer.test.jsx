import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookConstainer from "../BookContainer";
// import {getByText} from "@testing-library/react";
import BookList from "../BookList";
import getBooksAction from "../../../module/book/bookAction";


jest.mock('../BookList');
jest.mock("../../../module/book/bookAction");
describe('BookContainer', () => {

    beforeEach(() => {
        BookList.mockImplementation(() => <div>mock booklist comp </div>)
    });

    const books = [{
        id: 1,
        title: 'test title',
        description: 'desc',
        releaseYear: 2019,
    }];
    it('should render without error', async () => {

        getBooksAction.mockImplementation(() => ({
            type: 'BOOKLIST',
            payload: books
        }))
        // const {getByText} = renderWithRedux(<BookConstainer/>,{
        renderWithRedux(<BookConstainer/>, {});

        // expect(getByText('Here we will display all books')).toBeInTheDocument();
        expect(BookList).toHaveBeenLastCalledWith({books}, {})

    });

    it('should show loader whem isPending true', async ()=>{
        getBooksAction.mockImplementation(() => ({
            type: 'BOOKLISTPENDING',
        }))
        const {getByTestId} = renderWithRedux(<BookConstainer/>, {});
        expect(getByTestId('book-loader')).toBeInTheDocument();
    })

    it('should show error whem is pending error ocurred', async ()=>{
        getBooksAction.mockImplementation(() => ({
            type: 'BOOKLISTERROR',
        }))
        const {getByTestId} = renderWithRedux(<BookConstainer/>, {});
        expect(getByTestId('book-error-message')).toBeInTheDocument();
    })
});