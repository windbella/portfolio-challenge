# Chepter 1 - Express와 Vue 개발 환경 구성하기
- 자바스크립트 기반 기술을 활용하여 쉽게 포트폴리오를 만들기 위한 설정을 배워봅니다.
## vscode 설치하기
- https://code.visualstudio.com/
- 위 사이트에서 vscode를 다운로드해서 설치합니다.
- 설치 후 vscode를 실행하고 왼쪽 사이드바에서 Extensions(블록 모양 아이콘, Ctrl + Shift + X) 선택
- Vetur, ESLint를 검색하여 설치합니다.
## node.js 설치하기
- https://nodejs.org/en/
- 위 사이트에서 node를 다운로드해서 설치합니다.
- LTS로 선택하여 다운로드하면 되고, 현재 버전은 12.16.2입니다.
## powershell 설정하기 (윈도우)
- 윈도우 검색 버튼을 클릭하고 powershell을 입력합니다.
- powershell을 관리자로 실행합니다.
- Set-ExecutionPolicy Unrestricted 명령어를 입력하면 vscode에서 생길 수 있는 권한 문제가 해결됩니다.
## 프로젝트 생성 준비하기
- 원하는 위치에 원하는 이름의 디렉터리를 생성합니다.
- vscode를 실행하고 상단 바의 File > Open Folder... 를 선택하여 생성한 디렉터리를 엽니다.
- 상단 바의 Terminal > New Terminal 를 선택하면 화면 하단에 터미널 창이 열립니다.
- 터미널 창에 + 버튼 옆에 셀렉트 박스가 있는데, powershell로 설정되어 있다면 그대로 사용합니다.
- 다른 것으로 설정되어 있다면 Select Default Shell을 선택하여 powershell로 변경해 줍니다. (편의상의 설정이지 안 해도 상관은 없습니다.)
- 이제 터미널에 node --version를 입력합니다. 버전이 정상적으로 출력되면 노드가 성공적으로 설치된것 입니다.
- http://expressjs.com/en/starter/generator.html
- expressjs 생성기를 설치합니다. (더 자세한 내용을 알기 위해서는 위 사이트를 참조하세요.)
- 터미널에 npm install -g express-generator를 입력하면 진행됩니다.
- https://cli.vuejs.org/guide/prototyping.html
- vue cli를 설치합니다. (더 자세한 내용을 알기 위해서는 위 사이트를 참조하세요.)
- 터미널에 npm install -g @vue/cli @vue/cli-service-global을 입력하면 진행됩니다.
- yarn도 설치합니다. npm install -g yarn을 입력하면 진행됩니다.
- 혹시 설치가 잘되지 않으면 관리자 권한을 가진 터미널을 실행하여 진행하거나, 리눅스 환경의 경우 sudo를 이용합니다.
## 프로젝트 생성하기
- 지금까지 디렉터리 이동을 한 적이 없다면 그대로 입력하고 있다면 cd 명령어로 처음 생성한 디렉터리로 이동합니다.
- express -v ejs server 명령어를 입력하여 서버 프로젝트를 생성합니다.
- vue create client 명령어를 입력하여 클라이언트 프로젝트를 생성합니다.
- vue의 경우는 설정이 많아서 설정 방법을첨부 하겠습니다.
```
? Please pick a preset: (Use arrow keys)
  default (babel, eslint)
  Manually select features < 선택
? Check the features needed for your project: 
 (*) Babel <- ES5 변환을 위한 모듈
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support        
 (*) Router <- SPA를 위한 라우터
 (*) Vuex <- 상태관리 라이브러리
 (*) CSS Pre-processors <- 꼭 필요하진 않지만 sass 사용을 대비하여 선택
 (*) Linter / Formatter <- 코딩 스타일 관리
 ( ) Unit Testing
 ( ) E2E Testing
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) < Y 선택
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): 
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass) < sass 선택
  Less
  Stylus
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config < Airbnb 설정 선택
  ESLint + Standard config
  ESLint + Prettier
? Pick additional lint features:
 ( ) Lint on save
 ( ) Lint and fix on commit
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
  In dedicated config files < 선택
  In package.json
? Save this as a preset for future projects? (y/N) < 설정을 저장할 필요는 없으니 N 선택
```
- 처음에 생성한 디렉터리 안에 server 디렉터리와 client 디렉터리가 있는지 확인합니다.
## 생성된 프로젝트 템플릿 실행해보기
- cd server 명령어를 이용해서 server 디렉터리로 이동합니다.
- yarn install 명령어를 이용해서 노드 모듈을 설치합니다.
- yarn start 명령어를 입력하면 서버가 실행되고 브라우저에서 http://localhost:3000 을 입력하면 서버에 접속해볼 수 있습니다.
- cd ../client 명령어를 이용해서 client 디렉터리로 이동합니다.
- vue는 설치할 때 모듈 설치가 자동으로 되기 때문에 yarn install을 입력하지 않으셔도 됩니다.
- yarn serve를 입력하면 개발용 서버가 실행이 됩니다.
- yarn build를 입력하면 서버에서 사용할 리소스가 생성됩니다.
- yarn lint를 입력하면 코딩 스타일을 점검합니다.
- 각 server, client 디렉터리에 보면 package.json이라는 문서가 있는데 내용 중 scripts 안의 내용이 사용 가능한 명령어들입니다.  
## 링크
- [Chepter 2 - ESLint로 코딩 스타일 관리하기](https://github.com/windbella/portfolio-challenge/tree/master/ch2)
