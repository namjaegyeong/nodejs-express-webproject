# nodejs-express-webproject

nodejs와 express.js 을 이용한 웹 프로젝트

# Project Type

Toy project

# Development Environment

![Static Badge](https://img.shields.io/badge/nodejs-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white&link=https%3A%2F%2Fnodejs.org%2Fko)

![Static Badge](https://img.shields.io/badge/vscode-%235C2D91?style=for-the-badge&logo=visualstudiocode&logoColor=white&link=https%3A%2F%2Fcode.visualstudio.com%2F)

![Static Badge](https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=white&link=https%3A%2F%2Fgit-scm.com%2Fdownload%2Flinux)

# How to Run

```
node ./index.js
```

# Functions

## 이벤트 기반

노드는 V8과 더불어 libuv라는 라이브러리를 사용한다.
libuv 라이브러리는 노드의 특성인 이벤트 기반, 논 블로킹 I/O 모델을 구현하고 있다.
이벤트 기반(Event-driven)이란 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식을 의미한다.
즉, 이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두고, 이를 이벤트 리스너에 콜백함수를 등록한다.
이후 이벤트가 발생하면 리스너에 등록해둔 콜백함수를 호출하며, 이벤트가 끝난 후 노드는 다음 이벤트가 발생할 때까지 대기한다.

## 이벤트 루프

이벤트 루프(event loop)는 여러 이벤트가 동시에 발생했을 때 어떤 순서로 콜백함수를 호출 할지를 이벤트 루프가 판단한다.
노드는 이벤트가 종료될 때까지 이벤트 처리를 위한 작업을 반복하므로 루프(loog)라고 부른다.

![eventloop](https://github.com/namjaegyeong/nodejs-express-webproject/assets/57249939/da8ea7cb-fc71-4567-950f-562eee919f88)

![메인화면](https://github.com/namjaegyeong/nodejs-express-webproject/assets/57249939/5c841c5f-74e4-40a1-a8c1-4c30b0850c3c)

웹 서버 기능

localhost:3000 이동하면 "hello web 출력"
