const habitController = {
  async getHabits(req, res) {
    try {
      const { studyId } = req.params;

      if (!studyId) {
        return res.status(400).json({ message: "studyId가 필요합니다." });
      }

      const parsedStudyId = Number(studyId);
      if (Number.isNaN(parsedStudyId)) {
        return res.status(400).json({ message: "studyId는 숫자여야 합니다." });
      }

      // 테스트 용 데이터 (예시)
      const habits = [
        { id: 1, studyId: parsedStudyId, title: "물 2L 마시기" },
        { id: 2, studyId: parsedStudyId, title: "산책 30분 하기" },
      ];

      res.status(200).json({
        message: "습관 목록 조회 성공",
        data: habits,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "서버 오류 발생" });
    }
  },
};

export default habitController;
