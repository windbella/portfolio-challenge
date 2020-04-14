# Chepter 2 - ESLint로 코딩 스타일 관리하기
- ESLint를 이용하여 코딩 스타일을 관리하는 방법을 배워봅니다.
## server에도 eslint 설치하기
- vue의 템플릿 같은 경우는 기본적으로 lint 명령어를 지원합니다.
- server도 eslint 모듈을 설치하여 유사한 코딩 규칙을 적용하도록 할 것입니다.
- https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
- 위 규칙을 적용할 것입니다.
- eslint-config-airbnb와 eslint-config-airbnb-base의 차이점은 react나 jsx 같이 서버에서 필요 없는 규칙은 빠져있다는 것입니다.
- server 디렉터리로 이동 후 yarn add --dev eslint eslint-plugin-import eslint-config-airbnb-base를 입력합니다.
- 3가지 모듈을 설치한 이유는 위 링크에 설명되어 있습니다.
- 설치가 완료되었으면 client의 .eslintrc.js 파일을 server에도 복사해옵니다.
- 그리고 .eslintrc.js 파일을 열고 extends의 내용을 ['airbnb-base']로 변경합니다.
- parserOptions 부분도 삭제합니다.
- package.json 파일을 열고 scripts에 "lint": "eslint **/{www,*.js}"라는 명령어를 추가합니다.
- yarn lint 명령어를 입력합니다.
## vscode에서 ESLint Extension 사용하기
- 상단 바에서 File > Preferences > Settings > Workspace를 선택합니다.
- 검색창에 eslint를 입력합니다.
- Eslint: Working Directories 아래의 Edit in settings.json을 선택합니다.
- "eslint.workingDirectories": ["./client", "./server"]를 적고 저장합니다.
- .vscode/settings.json이 생기고 vscode의 코드 화면에서 오류가 표시될 것입니다.
## server에 eslint 설정하기
- yarn lint 명령어를 입력하면 수많은 경고 메시지를 보게 됩니다.
- yarn lint --fix 명령어를 입력하면 eslint가 자동으로 수정 가능한 오류는 수정됩니다.
- 바로 수정되지 않는 오류들은 .eslintrc.js에서 rules를 수정하거나 수동으로 수정해야 합니다.
```
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    ignorePatterns: ['!.eslintrc.js'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 'off',
        'import/order': 'off',
        'no-use-before-define': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
```
- server의 rules를 간단하게 수정한 내용입니다. 정답은 없고 취향에 맞게 수정하면 됩니다.
- 개인적으로 들여쓰기 4를 선호해서 4로 설정했습니다.
- ignorePatterns: ['!.eslintrc.js']의 경우는 .eslintrc.js 파일도 lint의 검사를 받도록 설정한 것입니다.
- 기본적으로는 무시되게 설정되어 있습니다.
## client에 eslint 설정하기
```
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'linebreak-style': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};

```
- .eslintrc.js 파일입니다.
- 'linebreak-style': 'off'의 경우는 개행문자를 검사하는 룰을 끄는 설정입니다. (개행문자가 윈도우와 리눅스가 다름)
```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 4
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
```
- .editorconfig 파일입니다.
- indent_size = 4로 변경하여 vscode에서 들여쓰기를 쓰기 편하게 설정합니다.
- EditorConfig for VS Code Extension으로 제어됩니다.
- vue cli의 yarn lint 명령어의 경우는 자동으로 오류가 수정됩니다.
- package.json에서 vue-cli-service lint --no-fix로 명령어를 바꾸면 자동으로 수정하지 않고
yarn lint --fix 명령어를 사용할 때만 수정되게 설정 가능합니다.
- https://eslint.org/
- https://github.com/airbnb/javascript
- 위 두 사이트를 참조하여 자신만의 코딩 스타일을 설정해보는 것을 추천합니다.
## 링크
- [Chepter 1 - Express와 Vue 개발 환경 구성하기](https://github.com/windbella/portfolio-challenge/tree/master/ch1)
- [Chepter 3 - 서버에서 클라이언트 리소스 서비스하기](https://github.com/windbella/portfolio-challenge/tree/master/ch3)
