"use strict";
function add(a, b) {
    return a + b;
}
// 올바른 사용 예시
console.log(add(5, 10)); // 15
// 오류 발생 예시들 (타입스크립트에서 컴파일 오류 발생)
console.log(add(5, "10")); // 오류: 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다..
console.log(add("hello", "world")); // 오류: 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다..
console.log(add(3, 4, 5)); // 오류 : 2개의 인수가 필요한데 3개를 가져왔습니다.
