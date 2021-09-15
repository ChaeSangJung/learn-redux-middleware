export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCESS, ERROR] = [`${type}_SUCESS`,`${type}_ERROR`];

    return param => async dispatch => {
        dispatch(type, param);
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCESS, payload });
        } catch(e) {
            dispatch({ type: ERROR, payload:e, error: true });
        }
    }
};

export const reducerUtils = {
    // 초기상태
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    // 로딩중
    loading: (prevData = null) => ({
        loading: true,
        data: prevData,
        error: null
    }),
    // 성공
    suceess: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    // 실패
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
};

export const handleAsyncAction = (type, key) => {
    const [SUCESS, ERROR] = [`${type}_SUCESS`,`${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]:reducerUtils.loading()
                };
            case SUCESS:
                return {
                    ...state,
                    [key]:reducerUtils.suceess(action.payload)
                };
            case ERROR:
                return {
                    ...state,
                    [key]:reducerUtils.error(action.payload)
                };
            default:
                return state
        }
    };
};