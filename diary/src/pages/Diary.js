// 일기 상세 조회 페이지 컴포넌트
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}번 일기</div>
      <div>Diary 페이지창입니다.</div>
    </div>
  );
};

export default Diary;
