import express from "express"; // Express 모듈 불러오기
import { createStudy } from "../controllers/study.controller.js"; // 스터디 생성 처리 함수 (컨트롤러) 불러오기

const router = express.Router(); // 라우터 객체 생성

// POST /api/studies 요청을 받아 createStudy 컨트롤러와 연결
router.post("/", createStudy);

export default router;
