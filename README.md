# ASPAI 홈페이지 (aspaiconference.org)

Asia-Pacific Symposium on Process and Artificial Intelligence(ASPAI) 공식 홈페이지 저장소입니다.
매년 열리는 행사라서 [icpmconference.org](https://icpmconference.org)처럼
**시리즈 첫 화면 + 연도별 사이트** 구조로 관리합니다.

## 폴더 구조

```
/
├── CNAME        ← 도메인(aspaiconference.org) 설정. 절대 옮기거나 지우지 마세요.
├── index.html   ← 시리즈 첫 화면: 연도별 행사 목록 (Next / Latest / Past Editions)
├── assets/      ← 시리즈 첫 화면 전용 style.css, 행사별 썸네일(editions/<연도>.jpg)
├── 404.html     ← 옛 주소(/summer-school.html 등)를 /2026/... 으로 넘겨주는 페이지
├── 2026/        ← ASPAI 2026 사이트 (행사 종료, 보관용 — 수정하지 마세요)
└── 2027/        ← ASPAI 2027 사이트 (작업 중)
```

- 각 연도 폴더는 **독립된 사이트**입니다. `style.css`, 이미지, 스크립트를 폴더마다 따로 가집니다.
  2027 디자인을 바꿔도 2026 보관본이나 시리즈 첫 화면이 깨지지 않게 하기 위해서입니다.
- 주소는 폴더 그대로 붙습니다: `2027/index.html` → `https://aspaiconference.org/2027/`

## 2027 작업 방법

1. `2027/` 폴더 안에서만 작업합니다.
2. 필요한 페이지는 `2026/`에서 복사해 와서 내용을 고치면 됩니다.
   (예: `2026/call-for-papers.html` → `2027/call-for-papers.html`, 이미지·로고도 함께 복사)
3. 링크와 이미지 경로는 **상대경로**로 씁니다.
   - ✅ `href="registration.html"`, `src="logos/postech.jpg"`
   - ❌ `href="/registration.html"`, `href="https://aspaiconference.org/registration.html"`
4. `2026/`의 검색창(`search.js`)은 페이지 목록이 파일 안에 직접 적혀 있습니다.
   가져다 쓸 경우 2027 페이지 목록으로 바꿔주세요.

## 미리보기 (로컬)

저장소 루트에서:

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000/` (시리즈 첫 화면) 또는 `http://localhost:8000/2027/` 을 엽니다.
(404.html의 옛 주소 이동은 GitHub Pages에서만 동작합니다.)

## 배포

GitHub Pages로 배포됩니다. `main` 브랜치에 push하면 1~2분 뒤 사이트에 반영됩니다.

## 시리즈 첫 화면 갱신하기 (매년)

루트 `index.html` 맨 위 주석에 바꿀 곳이 정리돼 있습니다.

행사 목록은 최신 연도가 맨 위이고, 항목마다 왼쪽에 사진, 오른쪽에 행사 이름과 그 아래 장소·날짜가 있습니다.

- **장소·일정이 정해지면:** 상단 메뉴 `Next: 2027 – TBA`와 2027 항목의 장소·날짜를 바꾸고,
  썸네일 사진을 `assets/editions/2027.jpg`로 넣어 글자만 있는 "2027" 박스를 사진으로 바꿉니다.
- **행사가 끝나면:** 상단 메뉴 `Latest`를 그 연도로 바꾸고, `id="past"`를 그 연도 항목으로 옮깁니다.
- **다음 해(2028) 준비를 시작하면:** `2027/`의 `style.css`와 기본 페이지를 복사해 `2028/` 폴더를 만들고,
  `Next` 메뉴를 2028로 바꾼 뒤 목록 맨 위에 2028 항목을 추가합니다.

## 주의사항

- `CNAME`은 루트에 그대로 두세요. 옮기면 도메인 연결이 끊깁니다.
- `404.html`은 2026년까지 루트에 있던 옛 주소(홍보물·QR코드·메일에 나간 링크)를 살리는 용도입니다. 지우지 마세요.
- GitHub 비밀번호나 토큰을 공유하거나 커밋하지 마세요. 저장소 권한은 각자 GitHub 계정을 collaborator로 초대받아 사용합니다.
- 슬라이드, 사진 같은 큰 파일은 저장소 용량을 계속 늘립니다. 꼭 필요한 파일만 올려주세요.
