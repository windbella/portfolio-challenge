# Chepter 5 - 뷰의 기초를 배우고 버튼 동작하게 하기
- 뷰의 구조를 이해하고, 동작하지 않던 내비게이션 버튼을 동작하게 합니다.
## 문제 확인하기
- 기존에 작업했던 포트폴리오 페이지를 열고 브라우저의 화면을 크기를 줄이거나 
크롬에서 F12(개발자 도구)를 누르고 개발자 도구 창의 왼쪽 상단의 스마트폰 표시(Toggle device toolbar)를 선택하면
페이지의 오른쪽 상단에 메뉴 버튼이 생기는 것을 확인할 수 있습니다.
- 이 버튼을 동작하게 만드는 것이 이번 챕터의 목표입니다.
- https://bulma.io/documentation/components/navbar/#navbar-menu
- 위 페이지의 Javascript toggle 이란 부분을 뷰로 표현해 보는 것입니다.
## 뷰 구조 공부하기
- .vue 파일의 템플릿과 스크립트 그리고 부수적인 스타일로 나누어져 있습니다.
- .vue 파일은 하나의 컴포넌트를 표현합니다.
- 템플릿은 html과 비슷한 모양으로 화면에 어떻게 그려질지를 정의하고 스크립트는 화면을 그리는데 참조할 속성과 동작들을 정의합니다.
``` javascript
<script>
export default {
    name: 'Nav',
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu(event) {
            event.preventDefault();
            this.isActive = !this.isActive;
        },
    },
};
</script>
```
- 위는 나중에 작성할 Nav.vue의 스크립트 부분입니다.
- data() { ... } 부분이 속성(데이터)을 담당하고
- methods: { ... } 부분이 동작(메소드)을 담당합니다.
- https://kr.vuejs.org/v2/guide/instance.html#%EC%86%8D%EC%84%B1%EA%B3%BC-%EB%A9%94%EC%86%8C%EB%93%9C
- https://kr.vuejs.org/v2/guide/components.html
- 자세한 내용은 위 링크를 참조합니다.
- https://kr.vuejs.org/v2/guide/components.html#data-%EB%8A%94-%EB%B0%98%EB%93%9C%EC%8B%9C-%ED%95%A8%EC%88%98%EC%97%AC%EC%95%BC%ED%95%A9%EB%8B%88%EB%8B%A4
- 속성은 왜 data() { ... } 형태이고 동작은 왜 methods: { ... } 형태인지에 대한 설명 링크입니다.
- 뷰는 스크립트 부분을 참조하여 템플릿이 자동으로 화면에 반영되는 구조입니다.
- 그렇다면 템플릿 부분을 어떻게 작성하여야 데이터와 연동되는지는 아래 링크에서 확인할 수 있습니다.
- https://kr.vuejs.org/v2/guide/syntax.html
- 링크들을 공부하지 않아도 우선 아래 예제에서 현재 작업에 필요한 내용들을 확인할 수 있습니다.
## 버튼 동작하게 하기
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
                    :class="{ 'is-active': isActive }" // 추가
                    aria-label="menu"
                    :aria-expanded="isActive.toString()" // 수정
                    @click="toggleMenu" // 추가
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isActive }"> // 수정
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
                    <a class="navbar-item"> // 구조 변경
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() { // 속성
        return {
            isActive: false,
        };
    },
    methods: { // 동작
        toggleMenu(event) {
            event.preventDefault();
            this.isActive = !this.isActive;
        },
    },
};
</script>
```
- 위 코드가 완성된 코드입니다.
- 우선 스크립트의 속성을 알아봅시다.
- isActive라는 속성을 추가했습니다. 이 속성은 메뉴가 활성화 상태인지 비활성화 상태인지를 나타냅니다.
- 그리고 동작의 toggleMenu라는 동작을 알아봅시다.
- event는 일반적인 돔의 이벤트 객체로 우리는 a 태그의 부수적인 동작을 원하지 않기 때문에 preventDefault 함수로 동작하지 않게 해줍니다.
- this.isActive = !this.isActive 코드로 해당 메서드가 실행될 때마다 isActive의 true/false 값을 반전시켜줍니다.
- 뷰는 스크립트의 속성이 변경될 때마다 해당 변경을 감지하여 템플릿을 다시 그립니다.
- 이제 변경이 일어날 때마다 다시 그려질 템플릿을 알아봅시다.
- class="navbar-burger burger" :class="{ 'is-active': isActive }" 부분에서 :의 차이는
class의 경우는 일반적인 html의 속성이고 :class는 스크립트의 속성에 따라 변경되는 속성이라는 점입니다.
- 속성의 종류에 따라서 문법이 조금씩 다른데 class의 경우는 아래 링크를 참조합니다.
- https://kr.vuejs.org/v2/guide/class-and-style.html
- 원래는 v-bind:class이지만 약어로 :class로 사용 가능한 것입니다.
- 나머지 :[key]가 들어간 부분에서도 isActive를 참조하여 isActive이 바뀜에 따라 다르게 그려지도록 정의되어 있습니다.
- 이번에는 @click에 주목해봅시다.
- :[key]가 data와 연결된다면 @[event]는 method와 연결됩니다.
- 해당 코드가 있는 태그를 클릭할 때마다 @click에 연결된 toggleMenu가 실행되어 isActive가 toggle 되게 되고
그로 인해서 화면이 다시 그려져 메뉴가 활성화되었다다 비활성화되었다 하게 됩니다.
- 마찬가지로 @[event]는 v-on:[event]의 약어입니다.
- https://kr.vuejs.org/v2/guide/events.html
- 이벤트에 관련된 내용은 위 페이지에서 추가로 확인 가능합니다.

## 링크
- [Chepter 4 - 내비게이션 바와 뷰 라우터 배우기](https://github.com/windbella/portfolio-challenge/tree/master/ch4)
- [Chepter 5.1 - 마크업 업데이트](https://github.com/windbella/portfolio-challenge/tree/master/ch5.1)
