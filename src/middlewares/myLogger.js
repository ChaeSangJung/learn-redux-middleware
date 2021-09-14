const myLogger = store => next => action => {
    // action 출력
    console.log(action);
    
    // 다음 미들웨어 (또는 리듀서)에 액션을 전달
    const result = next(action);

    // update 이후의 상태를 조회합니다.
    console.log("\t", store.getState());
    
    // dispatch(action)의 결과물 return, 기본:undefined
    return result;
}

export default myLogger;