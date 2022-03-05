//used to get object from redux
export const getUserToken = (rootReducer) => rootReducer.user.token;
export const getUserPromise = (rootReducer) => rootReducer.user.loginPromise;
export const getUserRegisterPromise = (rootReducer) => rootReducer.user.registerPromise;