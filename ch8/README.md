# Chepter 8 - 클라이언트에서 API 사용하기, 컨테이너와 컴포넌트
- 앞에서 구성한 API를 사용해서 포트폴리오를 구성해봅니다.
## API 사용하기
- axios는 클라이언트에서 http 통신을 하기 위한 가장 유명한 라이브러리 중 하나입니다.
- 브라우저에서의 axios는 ajax를 이용해 http 통신을 하며 Promise 기반이기 때문에 사용하기도 쉽습니다.
- https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started
- ajax는 비동기로 브라우저가 서버와 통신하기 위한 기술이고, 자세한 내용은 위에서 확인할 수 있습니다.
- 사용법은 간단합니다.
- https://github.com/windbella/portfolio-challenge/blob/b2535aee6359f816c68cabf7b06c752d9cdbb777/ch8/client/src/store/work.js
``` javascript
const response = await axios.get('/api/v1/works');
```
- work.js에 보면 위와 같은 코드가 있습니다.
- 위 코드는 서버에 get 요청을 보내 응답을 받는 코드입니다.
- json으로 응답을 주게 API를 구성했기 때문에 response.data에 요청한 json 객체가 들어있습니다.
- 위 데이터를 가지고 적절히 가공하여 commit(mutation)하면 state에 반영됩니다.
- https://github.com/axios/axios
- 위 페이지에서 axios의 더 정확한 사용법을 학습할 수 있습니다.
- 서버와의 통신은 반드시 성공하는 것이 아니기 때문에 state에 상태를 추가하여 통신 상태에 따라서 뷰를 구성하는 것을 추천합니다.
- 복습이 되겠지만 action은 사용자가 일으킨 이벤트를 받는 로직을 관리하도록 하고
- 비동기적인 동작을 사용할 수 있습니다. load는 async 함수를 사용했지만 Promise 체인을 통해서 작성해도 괜찮습니다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
- async/await와 Promise에 관한 내용은 여기서 다루지 않고 링크를 추가했습니다.
- mutation은 state를 변경하는 로직이고, 동기적인 동작만 사용할 수 있습니다.
- state는 데이터이며, getter 같은 경우는 state의 변화에 따라서 함께 변하는 계산된 데이터라고 보시면 됩니다.
- 이런 식으로 vuex 스토어를 구성하고 컨테이너에서는 props와 state, getter를 연결하여 데이터에 따라서 어떻게 렌더링 해줄지 고민하면 됩니다.
- 여기서 하나 지나친 점이 있습니다. 우리 보통 client에서 yarn serve로 개발을 하게 되는데
- 서버는 server 디렉터리의 yarn start 명령어로 켜게 됩니다. 이렇게 되면 클라이언트는 8080 포트이고, 서버는 3000 포트가 되게 됩니다.
- https://github.com/windbella/portfolio-challenge/blob/b2535aee6359f816c68cabf7b06c752d9cdbb777/ch8/client/src/main.js
``` javascript
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
```
- 그래서 이런 코드를 추가해서 환경 변수에 따라 axios의 기본 URL을 다르게 설정하도록 합니다.
- (URL이 없으면 클라이언트가 동작 중인 URL로 요청합니다.)
- 클라이언트의 최상위 디렉터리에 .env로 시작하는 파일들이 있는데
- .env.development는 serve로 시작할 때
- .env.production는 build로 빌드 했을 때의 환경 변수가 됩니다.
- server에서도 dotenv, cross-env 모듈을 이용해서 serve와 start로 yarn 명령어를 나누었는데
- 그 이유는 CORS 이슈 때문입니다.
- ajax는 기본적으로 프로토콜, 도메인, 포트가 모두 동일해야지 서버에서 데이터를 받아와 사용할 수 있습니다.
- 8080과 3000으로 테스트 환경에서는 포트가 서로 다르기 때문에 출처가 다르더라도 허가 해주는 설정을 서버에 필요로 합니다.
- 예제에서는 cors라는 모듈로 간단하게 설정하여 yarn serve로 서버를 실행할 때만 허용하도록 설정했습니다.
## 컨테이너와 컴포넌트
- 사실 컨테이너도 컴포넌트의 일종입니다.
- 컨테이너는 똑똑한 컴포넌트라고 불리기도 하고, 컴포넌트는 멍청한 컴포넌트라고 부르기도 합니다.
- 위 API 사용 설명을 잘 읽어보시면 컨테이너에 스토어의 데이터를 연결하라고 되어있습니다.
- 그 이유는 컨테이너는 상태 관리와 데이터의 흐름에 집중하는 컴포넌트이고
- 컴포넌트는 렌더링과 사용자 동작 전달에 집중하는 컴포넌트이기 때문입니다.
- 이렇게 하는 이유는 우선 기능과 UI에 대한 구분을 더 이해하기 쉬워지고
- 컴포넌트가 데이터에 의존적이지 않기 때문에 재사용성이 올라갑니다.
- 그리고 vuex의 단방향 데이터 흐름에 더 적합한 사고를 하게 됩니다.
- 컨테이너에서는 vuex와의 연결과 컴포넌트에 props 분배와 전달된 사용자 액션을 처리하는 역할만 해야 하고 
- 컴포넌트에서는 props에서 받은 데이터와 이벤트를 이용해서 템플릿 렌더링과 사용자 액션 데이터를 컨테이너로 전달하는 역할만 해야 합니다.
- 컴포넌트에서 state를 사용할 수는 있지만 렌더링에 관련된 최소한의 state만 사용하는 것이 좋습니다.
- 위 내용을 이해하게 되면
- https://vuex.vuejs.org/kr/
- 위 페이지의 Dispatch - Commit - Mutate - Render 순환의 그림이 이해가 더 쉬워질 것입니다.
- 그리고 위 내용을 가지고 구성을 하다 보면 컴포넌트의 depth가 너무 깊어지는 경우가 생기는데
- https://github.com/windbella/portfolio-challenge/blob/b2535aee6359f816c68cabf7b06c752d9cdbb777/ch8/client/src/views/WorkView.vue
``` html
<template>
    <div class="container">
        <TagListContainer />
        <h1 class="title">Work</h1>
        <WorkList
            :status="status"
            :list="list"
        />
    </div>
</template>
```
- 위 예제처럼 컨테이너 안에 컨테이너를 넣을 수 있기 때문에 중간 컨테이너를 사용해서 props를 너무 멀리 전달해야 하는 문제를 해결할 수 있습니다.
- (참고로 WorkView처럼 View로 끝나는 컴포넌트들은 이 예제에서 최상위 컨테이너 역할입니다.)
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/95d4dbe7d2135dfe4156e723ee4c5a6f4bd0edf3...b2535aee6359f816c68cabf7b06c752d9cdbb777
## 링크
- [Chepter 7 - 서버에서 API 제공하기](https://github.com/windbella/portfolio-challenge/tree/master/ch7)
- [Chepter 9 - 인증과 미들웨어](https://github.com/windbella/portfolio-challenge/tree/master/ch9)
