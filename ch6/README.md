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
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/32083210514d1a0cbdc3f4d43f1d95b03ffd3fd0...b71707497037b05a103ba487d81b8b1f80d11674
## 링크
- [Chepter 5.1 - 마크업 업데이트](https://github.com/windbella/portfolio-challenge/tree/master/ch5.1)
