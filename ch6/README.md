# Chepter 6 - 렌더링과 뷰엑스 배우기
- 뷰 템플릿의 렌더링 문법을 공부해보고 뷰엑스를 이용해 상태를 관리하는 법도 배워봅니다.
## v-if, v-show 공부하기
``` html
<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <button class="button" @click="toggle">toggle</button>
            </div>
        </div>
        <div class="notification" v-if="isShow">
            This is an about page (v-if)
        </div>
        <div class="notification" v-show="isShow">
            This is an about page (v-show)
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
        },
    },
};
</script>
```
- About.vue 파일을 이용해서 v-if와 v-show에 대해서 배워보겠습니다.
- 우선 script 부분에서 Boolean 형태의 데이터(isShow)와 그 데이터를 변경하는 메서드(toggle) 하나를 추가했습니다.
- 다음으로 template의 container 내부에 버튼 하나와 v-if와 v-show를 테스트할 엘리먼트를 작성했습니다.
- 그리고 1번 notification에는 v-if="isShow"를 2번 notification에는 v-show="isShow"를 추가했습니다.
- v-if나 v-show의 값으로는 Boolean 형식의 데이터가 들어가고 true 일 때 화면에 보이고 false 일 때 보이지 않게 됩니다.
- isShow 같은 값이 아니더라도 식도 들어갈 수 있습니다. 예를 들면 "isShow === false" 이런 모양으로 가능합니다.
- 이제 프로젝트를 실행해보면 toggle 버튼을 누르면 notification이 보였다 안 보였다 하는 걸 확인할 수 있습니다.
- 실행해보면 v-if와 v-show의 차이점이 궁금할 수 있습니다.
- 크롬 브라우저에서 About 페이지에 접속하여 F12 키를 눌러 개발자 도구를 실행하면 html이 엘리먼트들이 어떻게 변화하는지 볼 수 있는데
v-if의 경우는 실제로 엘리먼트가 사라지고 v-show의 경우는 엘리먼트는 사라지지 않고 인라인 스타일에 display: none이 추가되어 화면에서 보이지 않게 됩니다.
- 더 자세한 내용은 아래 페이지에서 학습 가능합니다.
- https://kr.vuejs.org/v2/guide/conditional.html
## vuex와 v-for 공부하기
``` javascript
const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
        ],
        index: 1,
    },
    mutations: {
        add(state) {
            state.index += 1;
            state.list.push({ key: state.index });
        },
    },
    actions: {
        test({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000 * 0.5);
        },
    },
};

export default work;
```
``` javascript
import Vue from 'vue';
import Vuex from 'vuex';
import work from './work';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        work,
    },
});
```
- 위 코드들은 store 디렉터리에 작성될 내용입니다.
- 뷰엑스는 상태 관리 라이브러리로 뷰를 사용하면서 겪을 수 있는 데이터 관리의 어려움을 해결해 줍니다.
- 뷰는 컴포넌트들로 
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/32083210514d1a0cbdc3f4d43f1d95b03ffd3fd0...b71707497037b05a103ba487d81b8b1f80d11674
## 링크
- [Chepter 5.1 - 마크업 업데이트](https://github.com/windbella/portfolio-challenge/tree/master/ch5.1)
# Chepter 6 - 렌더링과 뷰엑스 배우기
- 뷰 템플릿의 렌더링 문법을 공부해보고 뷰엑스를 이용해 상태를 관리하는 법도 배워봅니다.
## v-if, v-show 공부하기
``` html
<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <button class="button" @click="toggle">toggle</button>
            </div>
        </div>
        <div class="notification" v-if="isShow">
            This is an about page (v-if)
        </div>
        <div class="notification" v-show="isShow">
            This is an about page (v-show)
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
        },
    },
};
</script>
```
- About.vue 파일을 이용해서 v-if와 v-show에 대해서 배워보겠습니다.
- 우선 script 부분에서 Boolean 형태의 데이터(isShow)와 그 데이터를 변경하는 메서드(toggle) 하나를 추가했습니다.
- 다음으로 template의 container 내부에 버튼 하나와 v-if와 v-show를 테스트할 엘리먼트를 작성했습니다.
- 그리고 1번 notification에는 v-if="isShow"를 2번 notification에는 v-show="isShow"를 추가했습니다.
- v-if나 v-show의 값으로는 Boolean 형식의 데이터가 들어가고 true 일 때 화면에 보이고 false 일 때 보이지 않게 됩니다.
- isShow 같은 값이 아니더라도 식도 들어갈 수 있습니다. 예를 들면 "isShow === false" 이런 모양으로 가능합니다.
- 이제 프로젝트를 실행해보면 toggle 버튼을 누르면 notification이 보였다 안 보였다 하는 걸 확인할 수 있습니다.
- 실행해보면 v-if와 v-show의 차이점이 궁금할 수 있습니다.
- 크롬 브라우저에서 About 페이지에 접속하여 F12 키를 눌러 개발자 도구를 실행하면 html이 엘리먼트들이 어떻게 변화하는지 볼 수 있는데
v-if의 경우는 실제로 엘리먼트가 사라지고 v-show의 경우는 엘리먼트는 사라지지 않고 인라인 스타일에 display: none이 추가되어 화면에서 보이지 않게 됩니다.
- 더 자세한 내용은 아래 페이지에서 학습 가능합니다.
- https://kr.vuejs.org/v2/guide/conditional.html
## vuex와 v-for 공부하기
``` javascript
const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
        ],
        index: 1,
    },
    mutations: {
        add(state) {
            state.index += 1;
            state.list.push({ key: state.index });
        },
    },
    actions: {
        test({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000 * 0.5);
        },
    },
};

export default work;
```
``` javascript
import Vue from 'vue';
import Vuex from 'vuex';
import work from './work';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        work,
    },
});
```
- 위 코드들은 store 디렉터리에 작성될 내용입니다.
- 뷰엑스는 상태 관리 라이브러리로 뷰를 사용하면서 겪을 수 있는 데이터 관리의 어려움을 해결해 줍니다.
- 뷰는 컴포넌트들로 구성되어 있고 컴포넌트들이 데이터를 교환하려면 props와 emit을 이용해야 합니다.
- 인접한 컴포넌트들이라면 이러한 데이터 교환이 어렵진 않겠지만 점점 구조가 복잡해지면 데이터를 관리하는데 어려움이 발생합니다.
- 또한 컴포넌트의 데이터들은 일반적으로 컴포넌트가 생성될 때 생성되고 컴포넌트가 없어질 때 함께 사라지므로 데이터를 유지하기도 쉽지 않습니다.
- 뷰엑스는 단일 상태 트리를 사용하고 이는 한 애플리케이션의 단 하나의 저장소만을 가지고 있다는 것이고 복잡한 컴포넌트들의 상태에 영향을 받지 않는다는 것입니다.
- 또한 모든 컴포넌트에서 접근이 가능하고 map 헬퍼를 이용해서 저장소가 변경되었을 때 즉시 컴포넌트들이 업데이트되기 때문에 활용이 매우 심플하고 간단합니다.
- 우선 위쪽 코드를 먼저 보면 state는 컴포넌트의 data와 비슷하고 mutations와 actions는 컴포넌트의 methods와 유사합니다.
- 우리는 v-for를 공부할 것이기 때문에 list라는 배열 형태의 상태와 index라는 정수 정태의 상태를 추가했습니다.
- mutations에는 list에 item들을 추가하는 동작을 추가했고, actions에는 mutations의 add 동작을 이용해서 0.5초 후에 item을 추가하도록 하는 동작을 추가했습니다.
- 코드에서 눈치챘을 수도 있지만 mutations와 actions의 가장 큰 차이는 동기/비동기입니다.
- mutations에는 동기적인 코드가 들어올 수 없고, 넘겨받은 값을 이용해서 state를 수정하는 일만 하는 것이 바람직합니다.
- 반면에 actions는 비동기적인 코드도 들어올 수 있고, mutations의 동작들을 이용해서 state를 제어합니다. 예제에서는 setTimeout를 이용했지만 주로 ajax 작업들을 많이 사용합니다.
- namespace는 모듈의 재사용성과 구조에 영향을 주는데 아래 페이지에서 확인 가능합니다.
- https://vuex.vuejs.org/kr/guide/modules.html
- 아래쪽 코드는 위쪽 코드에서 작성한 모듈을 추가하는 내용입니다.
- 뷰엑스의 더 자세한 내용은 아래 페이지에서 확인 가능합니다.
- https://vuex.vuejs.org/kr/
``` html
<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <button class="button" @click="test">test</button>
            </div>
        </div>
        <div class="notification" v-for="item in list" :key="item.key">
            item {{item.key}}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Work',
    computed: {
        ...mapState('work', [
            'list',
        ]),
    },
    methods: {
        ...mapActions('work', [
            'test',
        ]),
    },
};
</script>
```
- Work.vue 파일을 이용해서 vuex의 활용과 v-for에 대해서 알아보겠습니다.
- 위에서 작성한 저장소의 데이터들은 mapState와 mapAction을 이용해서 computed와 methods에 연결이 가능합니다.
- 연결에 자세한 방법은 위에 vuex 관련 페이지에서 확인 가능하고, computed 같은 경우는 계산된 data로 자세한건 아래 페이지에서 학습 가능합니다.
- https://kr.vuejs.org/v2/guide/computed.html
- 이제 본격적으로 template 부분에 대해서 알아보겠습니다.
- 버튼의 경우는 mapAction으로 연결한 test 메서드가 연결되어 있고 사용법은 일반적인 메서드와 크게 다르지 않습니다.
- 중요한 notification의 v-for 구문을 알아보겠습니다.
- "item in list"라고 되어있는데 list는 mapState로 맵핑한 스토어의 데이터고 item은 자바스크립트의 forEach 구문에서처럼 루프를 돌면서 적용될 각각의 아이템 객체입니다.
- 꼭 이름이 item 일 필요는 없고 원하시는 이름으로 사용할 수 있습니다.
- 이제 notification 하위 엘리먼트들에서 item이라는 객체를 데이터 사용하듯이 활용 가능합니다.
- {{item.key}} 이런 식으로도 가능하고 :key="item.key" 이런 식으로도 가능한데 :key의 경우는 v-for에서 필수적으로 들어가야되는 속성입니다.
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/32083210514d1a0cbdc3f4d43f1d95b03ffd3fd0...b71707497037b05a103ba487d81b8b1f80d11674
## 링크
- [Chepter 5.1 - 마크업 업데이트](https://github.com/windbella/portfolio-challenge/tree/master/ch5.1)
