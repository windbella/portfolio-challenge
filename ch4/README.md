# Chepter 4 - 내비게이션 바와 뷰 라우터 배우기
- 뷰 라우터를 이해하고, css 프레임워크를 적용하여 내비게이션 바를 꾸며봅니다.
- 이번 챕터부터는 코드의 양이 많기 때문에 예제 코드를 다운로드하고 참고하면서 학습하는 것을 추천합니다.
## css 프레임워크 적용하기
- bulma라는 가벼운 css 프레임워크를 사용하기로 했습니다.
- https://bulma.io
- 위 사이트로 이동하여 오른쪽 상단에 다운로드 버튼으로 파일을 다운로드합니다.
- 압축을 풀고 css 디렉터리의 bulma.css를 client/src 디렉터리에 복사합니다.
- bulma.css를 main.css로 파일명을 변경합니다.
``` javascript
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './main.css'; // 추가

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

```
- client/src/main.js에 main.css를 import 하여 css를 적용할 수 있습니다.

## 뷰 라우터 개념 배우기
- https://router.vuejs.org/kr
- 위 사이트에서 자세한 사용법을 알 수 있고, 여기서는 간단한 내용만 설명하겠습니다.
- 뷰 라우터는 url 이동을 제어하고, url 주소와 원하는 컴포넌트를 매칭해주는 라이브러리라고 생각하면 쉽습니다.
``` javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
```
- client/src/router/index.js에서 라우터를 설정할 수 있습니다.
- const routes = [ ... ] 부분이 핵심입니다.
- 위 코드로 알아보면 우리가 만드는 사이트의 path가 / 일 때는 Home 컴포넌트를 매칭해주고
/About 일 때는 About 컴포넌트를 매칭해준다는 뜻입니다.
``` html
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>
```
- client/src/App.vue의 코드 중 일부입니다.
- 어떤 식으로 매칭될 것인지는 위 코드로 알아보겠습니다.
- \<router-view/\>라는 부분이 있는데 이 부분이 매칭된 컴포넌트로 전환되는 것입니다.
- url이 전환될 때마다 뷰의 코드가 자동으로 \<router-view/\>를 매칭된 컴포넌트로 바꿔 줍니다.
- 이런 방식으로 SPA로 구성된 웹은 일반적인 웹보다 부드럽게 페이지를 전환할 수 있습니다.
- 일반적인 a 태그로도 url 주소를 이동할 수 있지만 a 태그를 클릭하면 서버에 요청을 다시 해서 페이지가 리로드 되게 됩니다.
- \<a href="/"\>Home\</a\> → \<router-link to="/"\>Home\</router-link\>
- 위처럼 a 태그 대신 router-link를 이용하면 서버에 페이지를 다시 요청하지 않고 url 주소를 변경할 수 있습니다.
## 내비게이션 바 꾸미기
``` html
<template>
    <nav class="pf-nav has-background-primary">
        <div class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../assets/logo.png" width="28" height="28">
                </a>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/home" class="navbar-item">
                        Home
                    </router-link>

                    <router-link to="/work" class="navbar-item">
                        Work
                    </router-link>

                    <router-link to="/about" class="navbar-item">
                        About
                    </router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="button is-white is-small is-outlined">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
};
</script>

<style lang="css">
    @media screen and (min-width: 1024px) {
        .pf-nav .navbar {
            max-width: 1024px;
            margin: 0 auto;
        }
    }

    .pf-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        background-color: #fff;
    }
</style>
```
- src/components에 Nav.vue라는 파일을 만들고 위처럼 내용을 작성합니다.
- vue 파일은 3가지 파트로 구별됩니다.
- template은 html 부분, script가 동작 부분, style이 css를 담당합니다.
- https://bulma.io/documentation/components/navbar
- 위 페이지의 내용을 참고하여 위 코드를 작성하였습니다.
- 위 페이지의 예제와 조금 다른 점은 class navbar 부분을 한 번 더 감싸서 브라우저의 너비가 1024px 이상이면
navbar의 너비가 1024px로 고정되고 가운데 정렬 되게 css를 추가했습니다.
- 위처럼 vue 파일에 직접 css를 추가할 수도 있지만, 프로젝트의 진행 방식에 따라서 현명하게 선택하여 css를 정리하면 됩니다.
```
<template>
    <div id="app">
        <Nav />
        <section class="pf-content">
            <router-view/>
        </section>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
    name: 'App',
    components: {
        Nav,
    },
};
</script>

<style lang="css">
    @media screen and (min-width: 1024px) {
        .pf-content {
            width: 1024px;
            margin: 0 auto;
        }
    }
</style>
```
- App.vue 파일입니다.
- 위에서 만든 Nav.vue 컴포넌트로 기존의 내비게이션 바를 교체합니다.
- import Nav from './components/Nav.vue' 이런 식으로 컴포넌트를 임포트하고
- components: { Nav } components에 등록하면
- template에서 \<Nav /\> 이런 식으로 사용이 가능합니다.
- App.vue도 Nav.vue처럼 css를 추가하여 화면이 클 때 너비를 제한하고 가운데 정렬하도록 코드를 추가했습니다.
- 이제 Nav의 router-link로 url 이동을 하면 App의 router-view가 해당 컴포넌트로 전환되어 페이지가 변경되게 됩니다.
```
<template>
    <article class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Home
                </h1>
                <h2 class="subtitle">
                    This is an home page
                </h2>
            </div>
        </div>
    </article>
</template>
```
- views 디렉터리에서 각 페이지의 컴포넌트들은 위처럼 임시로 간단하게 작성해봤습니다.
- https://bulma.io/documentation/layout/hero
- 위 페이지의 내용을 참고하였습니다.
- html과 css의 학습이 조금 부족하더라도 위와 같은 css 프레임워크를 사용하면 
어느 정도 봐줄 만한 마크업이 가능하고 실습을 통해서 더 빠르게 마크업 구조를 배울 수 있습니다.
## 링크
- [Chepter 3 - 서버에서 클라이언트 리소스 서비스하기](https://github.com/windbella/portfolio-challenge/tree/master/ch3)
- [Chepter 5 - 뷰의 기초를 배우고 버튼 동작하게 하기](https://github.com/windbella/portfolio-challenge/tree/master/ch5)
