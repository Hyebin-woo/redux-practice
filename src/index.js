import { legacy_createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
const countModifier = (count = 0) => {
    count += 1;
    count -= 1;

    return count;
};

// state application에서 바뀌는 data
//✅ Store는 data를 저장하는 곳
//✅ CreateStore는 reducer를 요구함.
const countStore = createStore(countModifier);

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

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
