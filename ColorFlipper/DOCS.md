## 미니 프로젝트 - Color Flipper

### 요구 사항
- 처음의 숫자는 0으로 시작한다.
- `increase`, `decrease` 버튼을 누르면 숫자가 1이 증감한다.
- `reset` 버튼을 누르면 숫자가 0으로 초기화된다.

### 기능 구현
- `start` : 버튼을 누르면 게임 시작
    - `display : none`으로 되있던 다른 버튼들 활성화
    - `start` 버튼은 `display : none`으로 변경
- `gameset` : 버튼을 누르면 게임 종료
    - `display : none`으로 다른 버튼들 변경
    - `start` 버튼을 활성화
- `reset`, `start` : 버튼을 누르면 `count = 0`으로 초기화
- `increase`, `decrease` : 버튼을 누르면 `count++`, `count--`
- `showNumber`: 게임이 진행되면서 `count`를 태그에 `innerText`로 넣는다
    - `count`값에 따라 숫자 색이 달라지도록 함


<br>

[*Back to Contents*](../README.md)