아래 프롬프트는 DAY 28~32의 핵심을 누적 복습하도록 설계했습니다. 기존의 `posts`, `comments`, `users`, `todos` 대신 JSONPlaceholder의 `albums`와 `photos`만 사용하는 “앨범 탐색 서비스”를 만듭니다.

````text
당신은 초급 React 수업의 누적 복습 프로젝트를 설계하고 구현하는 프론트엔드 개발자이자 강사다.

현재 저장소의 DAY 28부터 DAY 32까지의 실습 코드를 먼저 분석한 후, 배운 내용을 종합적으로 복습할 수 있는 새로운 React 프로젝트를 완성하라.

## 1. 프로젝트 목표

프로젝트 루트에 다음 프로젝트를 생성한다.

- 폴더명: `day32-review-albums`
- 서비스명: `Album Archive`
- 주제: JSONPlaceholder의 앨범과 사진을 탐색하고 관심 앨범을 보관하는 서비스
- 개발 환경: Vite + React + JavaScript
- 스타일링: Tailwind CSS
- 기본 UI 라이브러리: shadcn/ui
- 라우팅: React Router
- 외부 데이터: JSONPlaceholder

기존 프로젝트에서 사용한 다음 데이터를 다시 사용하지 마라.

- `/posts`
- `/comments`
- `/users`
- `/todos`

새 프로젝트에서는 다음 데이터만 사용하라.

- `GET https://jsonplaceholder.typicode.com/albums`
- `GET https://jsonplaceholder.typicode.com/albums/:id`
- `GET https://jsonplaceholder.typicode.com/photos?albumId=:id`
- `GET https://jsonplaceholder.typicode.com/photos/:id`

`albums`와 `photos`를 중심으로 기존 게시판 예제와 다른 사용자 경험을 설계하라.

## 2. 사전 분석

구현을 시작하기 전에 다음 프로젝트를 조사하라.

- `day28/hello-react`
- `day29/hello-react`
- `day30/hello-react`
- `day30/todo-react`
- `day31/posts-react`
- `day31/todo-react`
- `day32/posts-react`
- `day32/login-tailwind`

특히 다음 내용을 확인하라.

- 컴포넌트와 props 작성 방식
- `useState`, `useEffect` 사용 방식
- 배열 렌더링과 불변성 처리 방식
- 제어 컴포넌트와 폼 처리 방식
- React Router 구성 방식
- `fetch`의 로딩·성공·오류 처리 방식
- Tailwind CSS 설정
- shadcn/ui의 JavaScript 설정
- `@/` 경로 별칭 설정
- 현재 React, Vite, React Router, Tailwind 및 shadcn/ui 버전

새 프로젝트는 `day32/posts-react`의 JavaScript 기반 Tailwind 및 shadcn/ui 설정을 기준으로 구성하라.

TypeScript 프로젝트로 만들지 마라.

## 3. 복습해야 하는 교육 범위

### DAY 28

- JSX
- 함수 컴포넌트
- 컴포넌트 분리
- import/export
- props
- props 구조 분해
- 기본값
- 조건에 따른 className
- 컴포넌트 재사용

### DAY 29

- `useState`
- 이벤트 처리
- 부모가 상태를 관리하고 자식에게 props로 전달하기
- 콜백 props
- 상태 끌어올리기
- 이전 상태를 사용하는 함수형 업데이트
- `useEffect`
- 의존성 배열
- 파생 값을 불필요하게 state로 만들지 않기

### DAY 30

- 배열 데이터의 `map` 렌더링
- 안정적인 `key`
- `filter`
- 조건부 렌더링
- 빈 목록 처리
- 제어 컴포넌트
- `value`, `onChange`, `onSubmit`
- `preventDefault`
- 입력값 검증
- 배열과 객체의 불변성
- spread 문법
- 목록 추가와 삭제
- 데이터로부터 개수와 목록 계산하기

### DAY 31

- `Routes`와 `Route`
- 중첩 라우트
- 공통 `Layout`
- `Outlet`
- `Link`
- `NavLink`
- `useNavigate`
- `useParams`
- `useSearchParams`
- 동적 경로
- 없는 주소 처리
- `fetch`
- `async`/`await`
- 로딩 상태
- 오류 상태
- 응답의 `ok` 확인
- URL이 변경되면 데이터 다시 요청하기

### DAY 32

- Tailwind CSS 유틸리티 클래스
- 반응형 레이아웃
- 모바일 우선 디자인
- Tailwind의 `sm`, `md`, `lg` 반응형 클래스
- shadcn/ui 컴포넌트 사용
- shadcn/ui 컴포넌트와 Tailwind 클래스 조합
- `@/components` 경로 별칭
- `Card`, `Button`, `Badge`, `Input` 등의 UI 컴포넌트 활용
- variant를 이용한 상태 표현

## 4. 서비스 구성

서비스는 “공개 앨범 탐색기”와 “나의 관심 앨범” 기능으로 구성한다.

JSONPlaceholder가 실제 데이터 변경을 저장하지 않는다는 점을 고려하여 관심 앨범은 React의 메모리 상태로만 관리한다. 새로고침하면 초기화되어도 된다.

`localStorage`, 서버 저장 또는 새로운 상태관리 라이브러리는 사용하지 마라.

## 5. 필수 페이지

### `/` — 홈

서비스 소개와 주요 기능을 보여 준다.

포함할 요소:

- 서비스 제목과 설명
- 전체 앨범 보기 버튼
- 관심 앨범 보기 버튼
- 앨범 번호로 바로 이동하는 폼
- 유효한 앨범 번호 범위 안내
- 잘못된 번호 입력 시 오류 메시지

폼 제출 시 `useNavigate`를 이용하여 `/albums/:id`로 이동하라.

### `/albums` — 앨범 목록

JSONPlaceholder의 전체 앨범을 불러와 카드로 표시한다.

필수 기능:

- 앨범 전체 목록 요청
- 로딩 화면
- 오류 화면
- 앨범 ID와 제목 표시
- 관심 앨범 추가·해제
- 제목 검색
- 사용자 번호 필터
- 검색 결과 개수 표시
- 검색 결과가 없을 때 안내 표시
- 각 앨범의 상세 페이지 링크

검색과 사용자 필터는 URL 검색 파라미터에 반영한다.

예:

- `/albums?userId=3`
- `/albums?query=qui`
- `/albums?userId=3&query=qui`

`useSearchParams`를 사용하라.

검색 결과는 별도 state로 저장하지 말고 다음 값에서 계산하라.

- API로 받은 전체 앨범
- 현재 `userId`
- 현재 검색어

### `/albums/:id` — 앨범 상세

동적 경로의 앨범 ID로 다음 데이터를 불러온다.

- 해당 앨범 정보
- 해당 앨범의 사진 목록

필수 기능:

- `useParams` 사용
- 앨범 정보 요청
- `/photos?albumId=:id` 요청
- 로딩 상태
- 오류 상태
- 존재하지 않는 앨범 처리
- 앨범 제목과 ID 표시
- 관심 앨범 추가·해제 버튼
- 사진 개수 표시
- 반응형 사진 그리드
- 사진 상세 페이지로 이동
- 앨범 목록으로 돌아가기

사진 목록은 모바일 2열, 중간 화면 3열, 큰 화면 4열 이상이 되도록 Tailwind로 구성하라.

외부 이미지가 로드되지 않을 수 있으므로 다음을 고려하라.

- 의미 있는 `alt` 속성
- 고정된 이미지 비율
- 이미지가 레이아웃을 밀어내지 않도록 처리
- 이미지 URL이 실패해도 제목과 카드 구조는 확인할 수 있는 디자인

### `/photos/:id` — 사진 상세

사진 ID로 사진 한 장을 불러온다.

필수 기능:

- `useParams`
- 단일 사진 요청
- 로딩 및 오류 처리
- 사진 제목
- 사진 ID
- 앨범 ID
- 큰 이미지
- 원래 앨범으로 돌아가는 링크

### `/favorites` — 관심 앨범

사용자가 관심 앨범으로 선택한 앨범만 표시한다.

필수 기능:

- 관심 앨범 개수 표시
- 관심 앨범 카드 목록
- 상세 페이지 링크
- 관심 앨범 해제
- 비어 있을 때 안내 화면
- 전체 앨범을 보러 가는 버튼

관심 앨범은 App 컴포넌트의 state에서 관리한다.

관심 앨범 객체 전체를 배열에 저장해도 된다. 다음 동작을 불변성을 지키며 구현하라.

- 이미 선택된 앨범이면 `filter`로 제거
- 선택되지 않은 앨범이면 spread 문법으로 추가
- 중복 추가 방지
- 함수형 상태 업데이트 사용

### `*` — 없는 페이지

잘못된 주소에 대한 안내와 홈으로 돌아가는 버튼을 제공한다.

## 6. 라우트 구조

다음 구조를 사용하라.

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="albums" element={<AlbumsPage />} />
    <Route path="albums/:id" element={<AlbumPage />} />
    <Route path="photos/:id" element={<PhotoPage />} />
    <Route path="favorites" element={<FavoritesPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
````

관심 앨범 상태와 이벤트 함수가 필요한 페이지에는 App에서 일반 props로 전달하라.

이 프로젝트에서는 Context API나 `useOutletContext`로 상태 관리를 추상화하지 마라.

## 7. 권장 파일 구조

```text
day32-review-albums/
├── README.md
├── components.json
├── jsconfig.json
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── lib/
    │   └── utils.js
    ├── components/
    │   ├── Layout.jsx
    │   ├── AlbumCard.jsx
    │   ├── AlbumGrid.jsx
    │   ├── AlbumFilters.jsx
    │   ├── PhotoCard.jsx
    │   ├── LoadingState.jsx
    │   ├── ErrorState.jsx
    │   └── ui/
    │       ├── badge.jsx
    │       ├── button.jsx
    │       ├── card.jsx
    │       └── input.jsx
    └── pages/
        ├── HomePage.jsx
        ├── AlbumsPage.jsx
        ├── AlbumPage.jsx
        ├── PhotoPage.jsx
        ├── FavoritesPage.jsx
        └── NotFoundPage.jsx
```

교육 목적보다 구조가 복잡해지지 않도록 불필요한 파일이나 계층은 추가하지 마라.

## 8. shadcn/ui 사용 규칙

shadcn/ui를 기본 UI 라이브러리로 사용하라.

최소한 다음 컴포넌트를 사용한다.

- `Button`
- `Card`
- `Badge`
- `Input`

필요하면 shadcn/ui의 다음 컴포넌트를 추가할 수 있다.

- `Alert`
- `Skeleton`
- `Separator`

하지만 기능 하나를 구현하기 위해 지나치게 많은 UI 컴포넌트를 설치하지 마라.

다음 UI는 shadcn/ui를 우선 사용하라.

- 버튼
- 카드
- 배지
- 입력 필드
- 오류 안내
- 로딩 스켈레톤

페이지 배치, 간격, 그리드 및 반응형 디자인에는 Tailwind CSS 클래스를 사용하라.

shadcn/ui 컴포넌트 파일은 패키지 내부의 블랙박스처럼 취급하지 말고 프로젝트 소스에 포함된 코드로 관리하라.

## 9. 레이아웃과 디자인

공통 `Layout`에는 다음이 있어야 한다.

- 서비스 로고 또는 이름
- 홈 메뉴
- 앨범 메뉴
- 관심 앨범 메뉴
- 관심 앨범 개수 Badge
- 현재 경로를 표시하는 활성 메뉴
- `Outlet`
- JSONPlaceholder 출처를 안내하는 footer

`NavLink`와 shadcn/ui의 `buttonVariants`를 조합하여 활성 메뉴를 표현하라.

디자인 요구사항:

- 모바일 우선 반응형 디자인
- 최대 콘텐츠 너비 제한
- 모바일에서 사용할 수 있는 내비게이션
- 카드의 hover 및 focus 상태
- 충분한 색상 대비
- 키보드로 이동 가능한 링크와 버튼
- 의미 없는 장식보다 데이터 탐색이 잘 보이는 구성
- 사진 이미지에는 `alt` 제공
- 활성 상태를 색상만으로 구분하지 않기

## 10. 상태 설계

다음은 state로 관리한다.

- API에서 받은 데이터
- 로딩 또는 초기 데이터 상태
- 오류 메시지
- 관심 앨범 배열
- 홈의 앨범 번호 입력값

다음은 별도 state로 만들지 않는다.

- 검색된 앨범 목록
- 필터링된 앨범 목록
- 관심 앨범 개수
- 사진 개수
- 어떤 앨범이 관심 앨범인지 여부
- 현재 URL에서 얻을 수 있는 검색어와 사용자 번호

파생 값은 props, API 데이터, URL 검색 파라미터로부터 계산하라.

## 11. 데이터 요청 규칙

각 페이지의 `useEffect` 안에 이름 있는 비동기 함수를 선언하고 호출한다.

```jsx
useEffect(() => {
  async function loadData() {
    // fetch
  }

  loadData();
}, []);
```

반드시 다음을 지켜라.

- `response.ok` 확인
- 실패 시 의미 있는 오류 생성
- 성공 시 이전 오류 메시지 초기화
- 로딩·성공·오류 UI 구분
- 동적 경로 ID가 바뀌면 다시 요청
- 검색으로 해결 가능한 값 때문에 API를 불필요하게 반복 호출하지 않기
- 렌더링 도중 `fetch`하지 않기
- 실제 API 응답에 존재하지 않는 필드를 임의로 가정하지 않기

API 주소는 중복 작성하지 않도록 다음 상수를 사용할 수 있다.

```js
const API = "https://jsonplaceholder.typicode.com";
```

별도의 API 추상화 계층이나 커스텀 훅은 만들지 마라. 현재 수업 범위에서 데이터 흐름이 직접 보이게 작성한다.

## 12. 범위 제한

다음 기술은 사용하지 마라.

- TypeScript
- Next.js
- Context API
- `useReducer`
- 커스텀 훅
- Redux
- Zustand
- TanStack Query
- Axios
- React Hook Form
- Zod
- 서버 또는 데이터베이스
- 인증
- localStorage
- 무한 스크롤
- 가상화
- 이미지 업로드
- 테스트 프레임워크
- shadcn/ui 이외의 UI 라이브러리

JSONPlaceholder에 쓰기 요청을 보내는 가짜 CRUD 기능도 만들지 마라. 이 프로젝트의 서버 데이터는 읽기 전용으로 사용한다.

## 13. 코드 작성 기준

- 기존 수업 코드와 비슷한 난이도를 유지한다.
- JavaScript와 JSX로 작성한다.
- 함수 컴포넌트를 사용한다.
- props는 구조 분해하여 받는다.
- 이름 있는 이벤트 처리 함수를 우선 사용한다.
- 이벤트 함수는 `handleToggleFavorite`처럼 역할이 드러나게 작성한다.
- 콜백 props는 `onToggleFavorite`처럼 작성한다.
- 배열이나 객체를 직접 변경하지 않는다.
- 목록의 `key`에는 API의 고유 ID를 사용한다.
- 중첩 삼항 연산자는 사용하지 않는다.
- 불필요한 최적화 훅을 사용하지 않는다.
- `useMemo`, `useCallback`, `React.memo`를 사용하지 않는다.
- 코드 주석은 “무엇”보다 “왜”를 설명한다.
- 모든 파일에 과도한 주석을 넣지 않는다.
- 한 컴포넌트가 너무 많은 책임을 갖지 않게 한다.
- 반대로 한 줄짜리 컴포넌트를 무분별하게 만들지 않는다.

## 14. README 작성

`day32-review-albums/README.md`에 다음 내용을 작성하라.

1. 서비스 소개
2. 주요 기능
3. 실행 방법
4. 페이지별 URL
5. 사용하는 JSONPlaceholder endpoint
6. 컴포넌트 구조
7. 데이터 흐름
8. DAY 28~32 복습 내용
9. Tailwind와 shadcn/ui의 역할 차이
10. 로딩·오류·성공 상태 설명
11. 관심 앨범 상태가 새로고침 시 초기화되는 이유
12. 추가 연습 문제 3개

추가 연습 문제도 DAY 32까지의 교육 범위를 넘지 않아야 한다.

## 15. 작업 안전성

- 기존 `day28`부터 `day32`까지의 파일을 수정하지 마라.
- 기존 `cafe-order`를 수정하지 마라.
- 모든 새 파일은 `day32-review-albums/` 안에만 생성한다.
- 폴더가 이미 존재한다면 먼저 내용을 조사하고 함부로 덮어쓰거나 삭제하지 마라.
- 사용자에게 확인받지 않은 기존 파일을 삭제하지 마라.

## 16. 검증

구현 후 다음을 실행한다.

```bash
npm run lint
npm run build
```

오류가 있으면 원인을 수정하고 다시 실행한다.

가능하면 개발 서버 또는 preview 서버에서 다음 경로도 확인한다.

- `/`
- `/albums`
- `/albums?userId=3`
- `/albums?query=qui`
- `/albums/1`
- `/photos/1`
- `/favorites`
- `/존재하지않는주소`

다음 항목을 검증한다.

- 직접 주소를 입력해도 페이지가 렌더링되는가
- 동적 경로가 작동하는가
- 검색 파라미터가 UI와 일치하는가
- API 로딩과 오류 UI가 구분되는가
- 관심 앨범 중복 추가가 방지되는가
- 관심 앨범 해제가 가능한가
- 모바일과 데스크톱 레이아웃이 자연스러운가
- 브라우저 콘솔에 React key 경고나 런타임 오류가 없는가
- 기존 프로젝트 파일이 변경되지 않았는가

## 17. 학습 설명

완성 코드만 제시하지 말고 구현 후 다음 내용을 초급 학습자가 이해할 수 있도록 설명하라.

- URL과 화면이 어떻게 연결되는가
- `Layout`과 `Outlet`이 어떤 역할을 하는가
- `useParams`와 `useSearchParams`의 차이
- `useNavigate`가 필요한 이유
- `useEffect`에서 데이터를 받는 흐름
- 로딩·오류·성공 상태를 구분하는 이유
- 관심 앨범 상태를 App에 둔 이유
- 관심 여부를 별도 state로 만들지 않는 이유
- Tailwind와 shadcn/ui가 각각 담당하는 부분
- `map`, `filter`, spread 문법이 사용된 위치

## 18. 최종 보고 형식

작업을 마친 뒤 다음 순서로 간결하게 보고하라.

1. 생성한 프로젝트 경로
2. 구현한 페이지
3. 구현한 주요 기능
4. DAY 28~32 개념 적용 위치
5. 사용한 JSONPlaceholder endpoint
6. 사용한 shadcn/ui 컴포넌트
7. lint 결과
8. build 결과
9. 실행 명령어
10. 남은 제한사항

질문을 다시 하지 말고 저장소 분석, 구현, 검증까지 진행하라.

```

```
