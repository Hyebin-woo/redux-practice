import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//✅ Reducer는 <data를 modify 해주는 함수>로 reducer가 return하는 것은 application에 있는 data가 됨
const countModifier = (count = 0, action) => {
    // console.log(count, action);
    // if (action.type === "ADD") {
    //     return count + 1;
    // } else if (action.type === "MINUS") {
    //     return count - 1;
    // } else {
    //     return count;
    // }

    // if문 보다 switch문이 더 나음 (공식문서도 다 스위치)
    switch (action.type) {
        case "ADD":
            return count + 1;
        case "MINUS":
            return count - 1;
        default:
            return count;
    }
};

// state application에서 바뀌는 data
//✅ Store는 data를 저장하는 곳
//✅ CreateStore는 reducer를 요구함.
const countStore = createStore(countModifier);

// dispatch와 우리의 버튼에 연결해보자
plus.addEventListener("click", () => {
    // 액션은 무조건 object 형태로 (name도 바꿀 수 없음)
    countStore.dispatch({ type: "ADD" });
});
minus.addEventListener("click", () => {
    countStore.dispatch({ type: "MINUS" });
});

//✅ Subscribe : store 안에 있는 변화 감지
//store.subscribe(func); // store안의 변화를 감지하면 func 실행

const onChange = () => {
    number.innerText = countStore.getState();
    // console.log("there was a change on the store");
};
countStore.subscribe(onChange);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//     number.innerText = count;
// };

// const handleAdd = () => {
//     count += 1;
//     updateText();
// };
// const handleMinus = () => {
//     count -= 1;
//     updateText();
// };

//plus.addEventListener("click", handleAdd);
//minus.addEventListener("click", handleMinus);
