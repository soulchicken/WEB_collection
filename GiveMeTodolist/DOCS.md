## 미니 프로젝트 - GiveMeTodolist

### 조건 만들기
- START 버튼을 누를 때까지는 아무 일도 일어나지 않기
- 페이크 서버 [JSON PLACEHOLDER](https://jsonplaceholder.typicode.com/todos) 를 사용해서 Todolist 데이터 가져오기
- TodoList에서 끝낸 일과 끝나지 않은 일의 수를 출력
- `Clear Todo` 버튼을 누르면 끝낸 일은 안보이게 하고 끝나지 않은 일만 보이게 한다.
- `View All` 버튼을 누르면 끝낸 일, 끝나지 않은 일을 다 보이게 한다.
    - 끝난 일은 COMPLETE 이라는 단어를 보여주고 취소선을 넣는다.

### 기능 구현
- 페이크 서버에서 데이터 요구
- 끝낸 일, 안끝낸 일 갯수 카운팅
- 카운팅 내용 디스플레이
- 끝낸 일과 안끝낸 일을 class로 나눔
- ------------22/04/07--------------
**생각지 못한 버그 발생**
- 200개의 Todo div 태그가 들어오니 갯수 카운팅같은 게 밀려 올라가 사라져버렸다.;
- `Clear Todo` 버튼을 누르면 끝낸 일을 안보이게 함
- `View All` 버튼을 누르면 끝낸 일도 보이게 함
    - `COMPLETE` 이 보이도록 하고, 글자는 연한색, 취소선까지 넣기
<br>

[*Back to Contents*](../README.md)