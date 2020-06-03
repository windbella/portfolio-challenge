# Chepter 6 - 서버에서 API 제공하기
- exrpess를 이용하여 포트폴리오에 필요한 간단한 CRUD API를 만드는 법을 배워봅니다.
## 구조 배워보기
- 이번 예제에서는
- (라우터) - 컨트롤러 - 모델
- 의 구조를 가집니다.
- 라우터는 URI를 기준으로 적절한 컨트롤러를 맵핑 해주는 역할을 합니다.
- 컨트롤러는 주어진 요청을 기반으로 적절한 모델을 호출해 응답을 반환해 주는 역할을 합니다.
- 모델은 이 서비스가 제공하고자 하는 핵심 데이터를 다룹니다.
- 서비스의 흐름을 설명하면
- 클라이언트가 요청을 하면, 라우터를 통하여 어떤 컨트롤러에서 처리할 것인지 결정이 되고
- 컨트롤러가 요청을 기반으로 적절한 모델 호출하면, 모델은 데이터베이스에서 데이터를 가져와 객체로 제공하고
- 컨트롤러가 모델에서 받은 객체를 적절하게 응답하면, 클라이언트는 원하는 데이터를 받게 됩니다.
- json 형태로 제공되는 API이기 때문에 특별히 뷰에 관련된 로직은 없습니다.
## 모델 설계하기
- https://github.com/windbella/portfolio-challenge/tree/master/ch7/server/models
``` javascript
Work.schema = {
    tableName: 'work',
    columns: [
        {
            name: 'id',
            type: 'INTEGER',
            isPrimaryKey: true,
            isAutoincrement: true,
        },
        { name: 'content', type: 'TEXT', isNotNull: true },
    ],
};
```
- work 모델의 스키마 부분을 보면 테이블 구조를 정의해 뒀습니다.
- work의 id와 content만으로 이뤄진 매우 간단한 구조지만, content를 json으로 저장하여 여러 정보를 담을 수 있게 했습니다.
- 이는 이 예제를 수정하거나 공부할 때 좀더 유연하게 할 수 있도록 하기 위해서입니다.
- 이처럼 API를 설계할 때 어떤 데이터를 제공할지 고민을 하고 모델을 정의해야 합니다.
- 그리고 비지니스 로직을 결정하고 모델을 설계해야 합니다.
- 예제에서는 간단한 CRUD만 제공하기로 하였습니다.
- https://github.com/windbella/portfolio-challenge/blob/master/ch7/server/utilities
- utilities의 코드를 보면 sqlite와 fs를 이용해서 경량 데이터베이스와 파일을 다루는 객체가 있습니다.
- 다른 프로그램 설치 없이 예제를 실행 가능하도록 sqlite3를 선택했습니다.
- 어떤 방법을 통해서 데이터를 저장하는지는 자유며 변경의 가능성도 있기 때문에 따로 분리했고
- 해당 코드를 따로 설명하진 않겠습니다.
## 컨트롤러 작성하기
- https://github.com/windbella/portfolio-challenge/tree/master/ch7/server/controllers
``` javascript
const readWork = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id);
        res.send(work);
    } catch (e) {
        res.sendStatus(500);
    }
};
```
- 이번 예제에서 컨트롤러의 기본 구조는 다음과 같습니다.
- req는 요청 객체이고, res는 응답 객체입니다.
- req에서 요청 데이터를 가져와 모델을 호출합니다.
- 그 결과를 응답 객체로 클라이언트로 보내는 구조입니다.
## 라우터 작성하기
- https://github.com/windbella/portfolio-challenge/blob/master/ch7/server/routes/api/index.js
``` javascript
router.post('/works', workController.createWork);
router.get('/works/:id', workController.readWork);
router.get('/works', workController.readWorks);
router.put('/works/:id', workController.updateWork);
router.delete('/works/:id', workController.deleteWork);
```
- 라우터 코드 중 일부입니다.
- 라우터는 URI를 컨트롤러로 맵핑하는 역할을 합니다.
- post, get, put, delet e등의 메서드가 있는데, 이는 http 요청 메서드입니다.
- https://developer.mozilla.org/ko/docs/Web/HTTP/Methods
- 브라우저에서 url 창에 주소를 넣고 요청하는 것이 get 요청입니다.
- RESTful API에서는 **C**REATE/**R**EAD/**U**PDATE/**D**ELETE - POST/GET/PUT/DELETE 이런 식으로 보통 대응됩니다.
- 사실 라우터는 컨트롤러의 한 부분인데 세분화 시킨 것이라고 볼 수 있습니다.
- https://expressjs.com/ko/guide/routing.html
- 사용법에 대한 자세한 것은 위 사이트에 정리되어 있습니다.
## 서버 완성하기
- https://github.com/windbella/portfolio-challenge/blob/master/ch7/server/app.js
``` javascript
const dbHelper = require('./utilities/db-helper');
const fileHelper = require('./utilities/file-helper');

const Work = require('./models/work');
const File = require('./models/file');

dbHelper.initialize(path.join(__dirname, './data/db/portfolio.db'), [File.schema, Work.schema]);
fileHelper.initialize(path.join(__dirname, './data/files'));
```
- dbHelper와 fileHelper를 초기화합니다.
- db 파일이 없는 경우 파일을 생성하고 테이블도 생성합니다.
``` javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
```
- 렌더링 엔진과 로거를 추가하고
- 필요한 파서를 추가합니다.
- 적절한 파서를 추가해야지 req 객체에서 적절하게 데이터를 가져올 수 있습니다.
``` javascript
app.use(express.static(path.join(__dirname, '../client', 'dist'), { index: false }));
app.use('/uploads', express.static(fileHelper.dirPath));
app.use('/', routes);
```
- 정적으로 서비스할 path를 지정합니다.
- 맨 윗줄의 경우 client 리소스를 서비스할 위치이고, 두 번째 줄은 업로드된 파일을 서비스할 위치입니다.
- 그리고 작성한 라우터도 추가해 줍니다.
- 나머지는 코드는 에러 처리입니다.
## API 사용해보기
- https://github.com/windbella/portfolio-challenge/blob/master/ch7/server/data/test/api.http
- REST Client라는 익스텐션을 설치하면 위 파일을 사용할 수 있습니다.
- Send Request를 눌러 여러 가지 테스트를 한 후
- data/db, data/files의 내용만 지우면 간단하게 초기화도 가능합니다. (서버를 끄고 지워야 합니다.)
## 변경점 확인하기
- https://github.com/windbella/portfolio-challenge/compare/ac38c44012129f5b16605823024ad631cc16a3a7...b92a8d58e95b4a5f87e081479b01bd2cf7196c5c
## 링크
- [Chepter 6 - 렌더링과 뷰엑스 배우기](https://github.com/windbella/portfolio-challenge/tree/master/ch6)
- [Chepter 8 - 클라이언트에서 API 사용하기, 컨테이너와 컴포넌트](https://github.com/windbella/portfolio-challenge/tree/master/ch8)
