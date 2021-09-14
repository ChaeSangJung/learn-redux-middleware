// 액션 타입
const THUNKINCREASE = "THUNKINCREASE";
const THUNKDECREASE = "THUNKDECREASE";

// 액션 생성 함수
export const thunkIncrease = () => ({ type : THUNKINCREASE });
export const thunkDecrease = () => ({ type : THUNKDECREASE });

// thunk 
export const thunkIncreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(thunkIncrease()), 1000);
};
export const thunkDecreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(thunkDecrease()), 1000);
};

// 초깃값
const initialState = 0;

const thunkcounter = (state = initialState, action) => {
    switch (action.type) {
        case THUNKINCREASE :
            return state + 1;
        case THUNKDECREASE : 
            return state -1;
        default : 
            return state;
    }
}

export default thunkcounter;