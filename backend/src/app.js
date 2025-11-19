// 모듈 불러오기 (require)
const express = require("express"); // Express 모듈
const cors = require("cors"); // CORS 모듈
const helmet = require("helmet"); // Helmet 모듈

// Express 애플리케이션 객체 생성
const app = express();

// 미들웨어 적용시키기
app.use(helmet()); // 기본 보안 헤더
app.use(cors()); // CORS 허용 (나중에 프로트엔드 도메인 허용하게 추가!)
app.use(express.json()); // JSON body를 JavaScript 객체로 파싱

// 헬스 체크용 기본 라우터
app.get("/health", (req, res) => {
  res.json({
    status: "성공",
    message: "공부의 숲 백엔드 잘 돌아갑니다~~!",
  });
});

// 앞으로 여기에 라우터들 붙이기!

// app 객체를 다른 파일에서 사용할 수 있도록 export
module.exports = app;
