# MOONYUK Portfolio

최문혁의 교육·콘텐츠·기술 포트폴리오입니다.

교육 현장에서 발견한 질문을 콘텐츠와 기술로 구현한 프로젝트, 글쓰기, Apple 교육 활동과 작업 원칙을 한 페이지에 담았습니다.

## 구성

- `app/page.tsx` — 페이지의 내용과 구조
- `app/globals.css` — 전체 디자인과 반응형 스타일
- `public/` — 프로필 이미지와 공개 에셋
- `outputs/index.html` — 이미지까지 포함된 공유용 단일 HTML
- `work/build-standalone.mjs` — 현재 사이트를 단일 HTML로 만드는 도구

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
```

검증용 빌드:

```bash
npm run build
```

단일 HTML을 다시 만들려면 로컬 개발 서버가 실행 중인 상태에서 다음 명령을 사용합니다.

```bash
node work/build-standalone.mjs
```

## 편집 흐름

GitHub의 최신 `main` 브랜치를 기준으로 작업합니다. Codex, Google Jules 또는 다른 편집 도구에서 수정한 뒤 변경 사항을 커밋하면 다음 작업자가 최신 상태를 이어서 편집할 수 있습니다.

## Contact

- 최문혁
- <ansgur4420@gmail.com>
