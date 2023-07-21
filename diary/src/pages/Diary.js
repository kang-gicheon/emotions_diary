// 일기 상세 조회 페이지 컴포넌트
import { useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); // 인수를 통해 URL파라미터로 받은 일기 id 전달

  return (
    <div>
      <div>{id}번 일기</div>
      <div>Diary 페이지창입니다.</div>
    </div>
  );
};

export default Diary;
