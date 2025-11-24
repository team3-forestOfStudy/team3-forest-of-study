import * as studyService from "../services/study.service.js";

// 프론트에서 사용하는 배경 이미지 목록
const ALLOWED_BACKGROUND_IMAGES = [
  "green",
  "yellow",
  "blue",
  "pink",
  "workspace_1",
  "workspace_2",
  "pattern",
  "leaf",
];

// 스터디 생성 컨트롤러
export async function createStudy(req, res, next) {
  try {
    const {
      nickname,
      title,
      description,
      backgroundImage,
      password,
      passwordConfirm,
    } = req.body;

    // 1. 유효성 검사
    if (
      !nickname?.trim() ||
      !title?.trim() ||
      !password?.trim() ||
      !passwordConfirm?.trim()
    ) {
      return res.status(400).json({
        result: "fail",
        message:
          "닉네임, 스터디 이름, 비밀번호, 비밀번호 확인은 필수로 작성해야합니다.",
        data: null,
      });
    }

    if (password !== passwordConfirm) {
      return res.status(400).send({
        result: "fail",
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        data: null,
      });
    }

    if (
      backgroundImage &&
      !ALLOWED_BACKGROUND_IMAGES.includes(backgroundImage)
    ) {
      return res.status(400).send({
        result: "fail",
        message: "맞지 않는 배경 이미지입니다.",
        data: null,
      });
    }

    // 2. service 호출 → DB에 스터디 생성
    const newStudy = await studyService.createStudy({
      nickname,
      title,
      description,
      backgroundImage,
      password, // service에서 암호화!
    });

    // 3. 응답 구성 및 전송 (비밀번호 관련 정보는 절대 보내지 않기!)
    return res.status(201).send({
      result: "success",
      message: "스터디가 성공적으로 생성되었습니다!",
      data: {
        studyId: newStudy.studyId,
        nickname: newStudy.nickname,
        title: newStudy.title,
        description: newStudy.description,
        backgroundImage: newStudy.backgroundImage,
        totalPoints: newStudy.totalPoints,
        createdAt: newStudy.createdAt,
      },
    });
  } catch (error) {
    // 예상하지 못한 에러는 미들웨어에 넘기기!
    next(error);
  }
}
