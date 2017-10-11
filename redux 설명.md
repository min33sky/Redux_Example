## REDUX 정리
- Action = **작업에 대한 정보를 지니고 있는 객체**
- Reducer = **변화를 일으키는 함수 + 순수함수** <br>
    - (previousState, action) => newState, 이전 상태와 액션을 받아서 다음 상태를 반환한다.
    - `순수함수` = **비동기작업X, 인수변경X, 동일한 인수 = 동일한 결과**

