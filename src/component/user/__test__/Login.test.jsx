import React from "react";
import renderWithRedux from "../../../util/testUtil";
import Login from "../Login";
import {fireEvent, wait} from "@testing-library/react";
import {loginAction} from "../../../module/user/userAction";

jest.mock('../../../module/user/userAction')
describe('Login test', () => {
    it('should show required error message for email and password', async () => {
        const {findByText} = renderWithRedux(<Login/>, {});

        const submitBtn = await findByText('Login');
        fireEvent.submit(submitBtn);

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
    })

    it('should show  email and password invalid message', async ()=>{
        const {findByText, getByLabelText} = renderWithRedux(<Login/>, {});

        const emailField = getByLabelText('Enter email address');
        const passwordField = getByLabelText('Enter password');

        fireEvent.change(emailField, {target: {value: 'email invalid'}});
        fireEvent.change(passwordField, {target: {value: 'wrongP'}});
        const submitBtn = await findByText('Login');

        fireEvent.submit(submitBtn);

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Password should be of minimum 8 char length')).toBeInTheDocument();
    })

    it('should call login action when email and password are valid', async ()=>{
        const {findByText, getByLabelText} = renderWithRedux(<Login/>, {});
        loginAction.mockImplementation(()=>(dispatch)=>{});

        const emailField = getByLabelText('Enter email address');
        const passwordField = getByLabelText('Enter password');

        fireEvent.change(emailField, {target: {value: 'peter@gmail.com'}});
        fireEvent.change(passwordField, {target: {value: 'password'}});
        const submitBtn = await findByText('Login');

        fireEvent.submit(submitBtn);

        await wait(()=>{
            expect(loginAction).toHaveBeenCalledWith(
                'peter@gmail.com',
                'password'
            )
        });
    });
});