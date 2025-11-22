import express from "express"; // Express 모듈
const router = express.Router(); // 라우터 객체 생성

// 도메인 별 라우터가 생기면 이 밑으로 붙이시면 됩니다:)
// 예) import studyRouter from "./study.route.js";  - 이 라우터가 Study 도메인의 모든 기능 담당
// 예) router.use("/studies", studyRouter);   - /studies 경로로 들어오는 모든 요청은 studyRouter로 전달되어 처리됨

export default router; // 다른 파일에서 사용할 수 있게 내보내기
