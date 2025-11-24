import prisma from "../prisma.js"; // Prisma Client 불러오기
import bcrypt from "bcrypt"; // Node.js 애플리케이션에서 bcrypt 라이브러리를 가져오기(비밀번호 암호화용 라이브러리)

// 스터디 생성 함수
export async function createStudy(data) {
  const { nickname, title, description, password, backgroundImage } = data;

  // 1. 비밀번호 암호화
  const encryptedPassword = await bcrypt.hash(password, 10);

  // 2. DB에 STUDY 행 저장
  const newStudy = await prisma.study.create({
    data: {
      nickname,
      title,
      description,
      backgroundImage,
      encryptedPassword,
    },
  });

  return newStudy;
}
