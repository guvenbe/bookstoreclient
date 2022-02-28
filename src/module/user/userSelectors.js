//used to get object from redux
export const getUserToken = (rootReducer) => rootReducer.user.token;
export const getUserPromise = (rootReducer) => rootReducer.user.promise;