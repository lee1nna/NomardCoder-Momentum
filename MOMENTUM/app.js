// id값을 통해 html의 element를 가져오는 방식
// const title = document.getElementById("title");
// title.innerText = "Got you!";
// console.log(title.id);
// console.log(title.className);

// classname을 통해 html의 element를 가져오는 방식
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// tagname을 통해 html의 element를 가져오는 방식
// const title = document.getElementsByTagName("h1");
// console.log(title);

// querySelector는 element를 CSS 방식으로 검색할 수 있음.
// 단 하나의 element를 return 해 줌. (가장 첫번째 element)
// 조건에 부합하는 모든 element를 검색하고 싶다면 querySelectorAll 사용
const title = document.querySelector(".hello h1");

title.innerText = "hello";