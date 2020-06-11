# Chepter 10 - 도커라이징
- 앞에서 완성한 포트폴리오를 도커 이미지로 만들어 봅니다.
## 준비하기
- https://www.docker.com/get-started
- 위 페이지에서 Docker Desktop을 다운로드 받고 설치합니다.
- https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
- vscode에서 Docker 익스텐션도 설치합니다.
## Dockerfile 작성하기
``` Dockerfile
FROM node:12.16.1-alpine

RUN mkdir -p /app
WORKDIR /app
ADD ./server /app/server
ADD ./client /app/client

WORKDIR /app/client
RUN yarn install
RUN yarn build

WORKDIR /app/server
RUN yarn install --production

WORKDIR /app

EXPOSE 3000

CMD node ./server/bin/www
```
- 프로젝트 최상단에 Dockerfile이라는 파일을 생성합니다.
- 그리고 위와 같이 작성합니다.
- FROM node:12.16.1-alpine 이 부분은 node가 설치된 alpine 리눅스를 기본으로 이미지로 사용한다는 의미입니다.
- RUN 명령어 실행 명령어로 생성된 리눅스에서 app이라는 디렉터리를 만들었습니다.
- WORKDIR 명령어는 작업 위치를 변경한다고 보시면 됩니다. 리눅스의 cd 명령어와 개념입니다.
- ADD 명령어는 로컬 파일을 복사해 주는 역할을 합니다.
- client와 server 파일들을 모두 옮겨주고
- WORKDIR 명령어와 RUN 명령어를 이용해 server와 client에 모듈을 설치하고
- client에서는 vue 프로젝트를 빌드도 해줍니다.
- 그리고 EXPOSE 명령어로 사용할 포트를 지정해 주고
- CMD 명령어로 이 이미지를 실행했을 때 실행될 명령어를 지정해 줍니다.
- 위에서 설명한 명령어들을 잘 조합하면 어렵지 않게 원하는 형식의 Dockerfile을 작성할 수 있습니다.
- 그리고 Docker 익스텐션이 설치된 상태에서 vscode에서 Dockerfile에 마우스 오른쪽 클릭을 하면 Build Image...라는 버튼이 보입니다.
- 해당 버튼을 누르면 중앙 상단에 이미지 명을 정하는 창이 뜨고 이미지명을 적고 엔터를 누르시면 이미지 빌드가 시작됩니다.
- 터미널 쪽에서 진행 상황이 보이는데, 어떤 명령어가 실행된지도 보이기 때문에 명령어로도 빌드를 할 수 있다는 사실을 알 수 있습니다.
- 완료된 후 왼쪽 익스텐션 아이콘 아래에 고래 아이콘을 눌러보면
- IMAGES 탭에 이미지가 생긴 걸 볼 수 있습니다.
- 이미지를 열고 태그에 마우스 오른쪽 클릭을 한 후 Run 버튼을 누르면 도커이미지로 컨테이너를 만들어 실행할 수 있습니다.
- 그리고 CONTAINERS 탭에서 컨테이너를 멈추거나 제거할 수 있습니다.
- 물론 위 과정도 모두 명령어로도 가능합니다.
- Dockerfile을 작성하고 로컬에서 테스트하는 방법을 배워봤습니다.
- 도커에 대한 자세한 활용법은 아래 페이지에서 학습 가능합니다.
- https://docs.docker.com/
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/fa6ac13859311e9917c484e40dd2ed1d543ca39a...9f4f2ac4da70e5a2d77f8e85c6bca5ab36499c98
## 링크
- [Chepter 9 - 인증과 미들웨어](https://github.com/windbella/portfolio-challenge/tree/master/ch10)
