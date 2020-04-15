# Chepter 3 - 서버에서 클라이언트 리소스 서비스하기
- 클라이언트에서 생성한 리소스 파일들을 서버에서 서비스해보면서 프로젝트의 기본 구조를 익힙니다.
## client 프로젝트 설명
- client는 디렉터리 이름 그대로 클라이언트에서 동작할 코드를 담당하고 있습니다.
- 웹 서비스에 있어서 클라이언트는 브라우저에 해당합니다.
- yarn serve를 이용해서 서버를 띄울 수 있어 서버와 통합된 프로젝트로 착각할 수 있지만
vue cli에서 설치된 서버는 개발용 서버로 실제 서비스에는 적합하지 않습니다.
- yarn build 명령어를 이용해서 리소스를 생성하고 서버에서 해당 리소스를 서비스하는 것이 바람직합니다.
## server 프로젝트 설명
- express라는 node 생태계에서 가장 유명한 웹 프레임워크를 이용합니다.
- vue cli에서 router 설정을 할 때 유심히 메시지를 봤다면 알 수 있지만 라우터를 history 모드로 설정했기 때문에
서버에서 모든 페이지의 url 요청을 하나의 index.html로 연결할 필요가 있습니다.
- index 페이지만 index.html로 연결되어 있더라도, index 페이지로 접속하면 정상적으로 페이지를 옮겨 다닐 수 있지만
이것은 브라우저에 내에서만 주소가 바뀌는 것이지 실제로는 서버에 해당 주소를 요청하고 있지 않기 때문입니다.
- 만약 이 상태에서 다른 주소에서 새로 고침을 하거나 index 페이지가 아닌 다른 주소로 접근하면 오류 페이지로 연결될 것입니다.
- 서버에서 모든 페이지의 url 요청을 index.html로 설정하면 index.html이 로드된 후 자바스크립트가 주소를 파악하여 원하는 화면을 그려줄 것입니다.
## server에 client에서 생성된 리소스 서비스하기
- 우선 client로 cd 명령어로 이동한 후 yarn build로 클라이언트 리소스를 컴파일합니다.
- vue cli로 생성한 프로젝트는 내부에 webpack을 가지고 있어 빌드 하면 src의 소스 코드들이 번들링 되어 브라우저가 해석 가능한 파일로 변환됩니다.
- 다시 server로 cd 명령어로 이동합니다.
- public 디렉터리와 routes/users.js, views/index.ejs는 필요 없는 파일이기 때문에 삭제합니다.
``` javascript
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users'); 제거

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client', 'dist')));
// app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', indexRouter);
// app.use('/users', usersRouter); 제거

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
```
- app.js를 위와 같이 수정합니다.
- 필요 없는 코드를 제거하고 static 디렉터리를 client의 dist 디렉터리로 변경합니다.
- __dirname은 현재 파일이 있는 위치를 의미합니다.
- 이렇게 설정하면 url / 아래에 dist/의 파일들이 매칭됩니다.
- 예를 들면 localhost:3000/css/app.???.css에 client/dist/css/app.???.css 파일이 매칭됩니다.
``` javascript
const express = require('express');
const path = require('path'); // 추가

const router = express.Router();

/* GET home page. */
router.get('*', (req, res) => {
// router.get('/', (req, res) => { 변경
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
    // res.render('index', { title: 'Express' }); 변경
});

module.exports = router;
```
- routes/index.js를 위와 같이 수정합니다.
``` javascript
app.use('/', indexRouter);
```
- app.js의 위 코드에 의해서 해당 라우터가 /에 매칭됩니다.
- *로 설정했기 때문에 /아래의 모든 주소가 client/dist/index.html로 연결되게 됩니다.
- 다만 static 설정이 먼저기 때문에 일반 파일들은 정상적으로 서비스됩니다.
- 이제 yarn start 명령어로 실행하면 서버에서 클라이언트에서 생성된 리소스가 서비스되는 것을 확인 가능합니다.
## 링크
- [Chepter 2 - ESLint로 코딩 스타일 관리하기](https://github.com/windbella/portfolio-challenge/tree/master/ch2)
- [Chepter 4 - 내비게이션 바와 뷰 라우터 배우기](https://github.com/windbella/portfolio-challenge/tree/master/ch4)
