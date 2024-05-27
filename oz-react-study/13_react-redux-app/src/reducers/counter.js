//coutner를 위한 reducer 함수
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1; //reducer store에 있는 state를 업데이트 함 -> react 컴포넌트가 리렌더링 됨
        case 'DECREMENT':
            return state - 1 ;
        default:
            return state;
    }
}
export default counter;