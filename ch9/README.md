# Chepter 9 - 인증과 미들웨어
- 앞에서 완성한 포트폴리오는 문제가 하나 있습니다.
- RESTful 한 Api를 제공하고 있기 때문에 쉽게 주소를 유추하여 페이지 관리자가 아닌 사람이 내용이나 파일을 업로드할 수 있습니다.
- 이러한 단점을 보완하기 위해서 간단한 인증 모듈을 미들웨어로 만들어 추가해봅니다.
## 미들웨어
- 여기서 미들웨어는 Express 미들웨어를 의미합니다.
- Express 프레임워크의 기본단위는 미들웨어라고 할 수 있습니다.
- 서버가 요청을 받아들이면 등록한 미들웨어를 순서대로 통과하며 요청이 처리되고
- 적절한 미들웨어와 만나면 응답이 이뤄지고 동작을 멈추게 됩니다.
``` javascript
function (req, res, next) {
}
```
- 기본적인 구조는 위와 같은 함수이며
- req 매개변수는 요청 데이터를 가지고 있고
- res 매개변수는 응답 데이터와 응답을 할 수 있는 기능을 가지고 있습니다.
- next는 다음 미들웨어로 작업을 넘기는 역할을 합니다.
- 상황에 따라서 req나 res 데이터만 수정하여 next()로 다음 미들웨어로 넘길 수도 있고
- res.render, res.send 등의 함수로 응답만 하고 next() 없이 그대로 역할을 끝낼 수도 있습니다.
```
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client', 'dist'), { index: false }));
app.use('/uploads', express.static(fileHelper.dirPath));
app.use(simpleBasicAuth('test', '1234'));
app.use('/', routes);
```
- 미들웨어의 등록은 use를 이용해서 할 수 있고 등록한 순서대로 동작하게 됩니다.
- Express는 이렇게 이해하기 쉬운 구조를 가지고 있기 때문에 더 쉽게 웹서버를 구성할 수 있습니다.
- 더 자세한 내용은 아래 페이지에서 학습할 수 있습니다.
- https://expressjs.com/ko/guide/using-middleware.html
## 간단한 인증 미들웨어 만들기
``` javascript
module.exports = function auth(user, password) {
    return (req, res, next) => {
        if (req.method === 'GET') {
            next();
        } else {
            const authorization = req.headers.authorization || '';
            const [, encodedToken] = authorization.match(/Basic (.+)/i) || ['', ''];
            const [, decodedUser, decodedPassword] = Buffer.from(encodedToken, 'base64').toString().match(/(.+):(.+)/) || [];
            if (user === decodedUser && password === decodedPassword) {
                next();
            } else {
                res.set('WWW-Authenticate', 'Basic');
                res.sendStatus(401);
            }
        }
    };
};
```
- 간단하게 Authorization 헤더에 아이디와 비밀번호를 받아서
- 서버에서 지정된 정보와 같으면 통과시켜주는 인증 미들웨어를 만들어봤습니다.
- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Authorization
- 인증 구조에 대해서는 위 페이지에서 확인 가능하고 Basic 방식을 채택했습니다.
- 간단하게 설명하면
- GET 메서드의 요청은 포트폴리오 페이지에서 사용하기 때문에 인증이 없어도 통과하게 조건을 주고
- Authorization 헤더에서 토큰을 분리하고, Base64 인코딩된 토큰을 디코딩 합니다.
- 그리고 {id}:{password}로 된 문자열을 분리하려 미리 저장한 인증 정보와 비교하여
- 인증 실패 시 401 코드를 반환하고
- 인증 성공 시 다음 미들웨어로 넘기는 코드입니다.
``` javascript
app.use(simpleBasicAuth('test', '1234'));
app.use('/', routes);
```
- 위와 같이 만든 인증 미들웨어를 routes 앞에 배치시키면 인증 정보를 확인하고 동작하게 됩니다.
- https://github.com/windbella/portfolio-challenge/tree/master/ch7#api-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
- ch7에서 소개한 방법을 사용하면 편하게 테스트할 수 있습니다. (REST Client 익스텐션)
```
DELETE http://localhost:3000/api/v1/works/1
Authorization: Basic dGVzdDoxMjM0
```
- 위와 같이 헤더를 추가할 수 있습니다.
- 헤더를 이용한 인증 이외에도
- 쿠키나 세션을 이용하면 일반적인 로그인 시스템을 만들 수 도 있습니다.
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/1388976a1b395f8984afb6c8ca960f1b078d86f4...4e7dd4833ec318f00fe1fbfdb7e9c3767fd767e3
## 링크
- [Chepter 8 - 클라이언트에서 API 사용하기, 컨테이너와 컴포넌트](https://github.com/windbella/portfolio-challenge/tree/master/ch8)
- [Chepter 10 - 도커라이징](https://github.com/windbella/portfolio-challenge/tree/master/ch10)
