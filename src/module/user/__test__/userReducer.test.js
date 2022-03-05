import userReducer, {USER_INITIAL_STATE} from "../userReducer";

describe('user reducer', () => {
    it('should return new state for login user action', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_LOGIN',
            payload: {
                token: 'jwt token'
            },
        })
        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            token: 'jwt token',
        })
    });

    it('should return new state for register user action', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_REGISTER',
            payload: {
                id: 'some uuid',
                name: 'name',
                email: 'email',
                password: 'password',
            },
        })
        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            user: {
                id: 'some uuid',
                name: 'name',
                email: 'email',
                password: 'password',
            },
        })
    });

    it('should return pending state for register user action', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_REGISTER_PENDING',
            payload: {
                id: 'some uuid',
                name: 'name',
                email: 'email',
                password: 'password',
            },
        })
        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            registerPromise: {isPending: true, isFulfilled: false, isErrorOcurred: false}
        })
    });

    it('should return success state for register user action', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_REGISTER_SUCCESS',
            payload: {
                id: 'some uuid',
                name: 'name',
                email: 'email',
                password: 'password',
            },
        })
        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            registerPromise: {isPending: false, isFulfilled: true, isErrorOcurred: false}

        })
    });

    it('should return error state for register user action', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_REGISTER_ERROR',
            payload: {
                id: 'some uuid',
                name: 'name',
                email: 'email',
                password: 'password',
            },
        })
        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            registerPromise: {isPending: false, isFulfilled: false, isErrorOcurred: true}
        })
    });
})