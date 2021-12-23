## 리덕스 미들웨어
    - action => middleware => reducer => store
        - 액션이 디스패치 된 다음
        - 리듀서에서 해당 액션을 받아와서 업데이트하기 전에
        - 추가적인 작업을 할 수 있는 것들
            - 특정 조건에 따라 액션이 무시
            - 액션을 콘솔에 출력, 서버쪽에 로깅
            - 액션이 디스패치 => 수정 => 리듀서에게 전달
            - 특정 액션이 발생 => 다른 액션이 발생
            - 특정 액션이 발생 => 특정 자바스크립트 함수를 실행
            - 주된 사용 용도는 비동기 작업을 처리
                - 백엔드 API 를 연동 ? 리덕스 미들웨어를 사용
    - 비동기 작업에 관련된 미들웨어 라이브러리
        - redux-thunk
        - redux-saga
        - redux-observable
        - redux-promise-middleware
    - redux-saga와 redux-observable
        - 특정 액션을 모니터링 가능
            - 특정 액션이 디스패치됐을때 원하는 함수를 호출
            - 라우터를 통해 다른 주소로 이동
![middleware](./image/0.png)

### 2. 미들웨어 만들어보고 이해하기
    - 리덕스 미들웨어를 만들 땐 다음 템플릿을 사용
[템플릿](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)
```javascript
    const middleware = store => next => action => {
        // 하고 싶은 작업...
    }

    function middleware(store) {
        return function (next) {
            return function (action) {
                // 하고 싶은 작업...
            };
        };
    };
```
    - 첫번째 store는 리덕스 스토어 인스턴스
        - dispatch, getState, subscribe 내장함수들
    - 두번째 next
        - 액션을 다음 미들웨어에게 전달하는 함수
    - 세번째 action
        - 현재 처리하고 있는 액션 객체
![middleware](./image/2_1.png)
    - 리덕스 스토어에는 여러 개의 미들웨어를 등록할 수 있음
        - 새로운 액션이 디스패치 되면 첫 번째로 등록한 미들웨어가 호출
            - 미들웨어에서 next(action)을 호출하게 되면 다음 미들웨어로 액션이 넘어감
            - 미들웨어에서 store.dispatch 를 사용하면 다른 액션을 추가적으로 발생시킬 수 도 있음

### 4. redux-thunk
    - 액션 객체가 아닌 함수를 디스패치 할 수 있음
        - 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어
        - 함수를 디스패치 할 때에는, 해당 함수에서 dispatch 와 getState 를 파라미터로 받아와주어야 함
            - 이 함수를 만들어주는 함수가 thunk
        - thunk 함수에서 async/await를 사용해도 상관 없음

### 5. redux-thunk로 프로미스 다루기
    - swr, react-query를 통해서 전역관리를 줄이는 추세

### 6. API 재로딩 문제 해결하기
    - 2번째 방법 건너 뜀