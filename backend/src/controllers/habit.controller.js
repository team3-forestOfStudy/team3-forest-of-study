import habitService from "../services/habit.service.js";

const habitController = {
  // 습관 목록 조회
  async getHabits(req, res) {
    try {
      const { studyId } = req.params;

      // 1) studyId 존재 여부 체크
      if (!studyId) {
        return res.status(400).json({ message: "studyId가 필요합니다." });
      }

      // 2) 숫자인지 체크
      const parsedStudyId = Number(studyId);
      if (Number.isNaN(parsedStudyId)) {
        return res.status(400).json({ message: "studyId는 숫자여야 합니다." });
      }

      // 3) 서비스 호출
      const habits = await habitService.getHabits(parsedStudyId);

      // 4) 응답 반환
      return res.status(200).json({
        message: "습관 목록 조회 성공",
        data: habits,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "서버 오류 발생" });
    }
  },
};

export default habitController;
