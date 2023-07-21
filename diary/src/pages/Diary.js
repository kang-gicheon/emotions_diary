// 일기 상세 조회 페이지 컴포넌트
import { useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); // 인수를 통해 URL파라미터로 받은 일기 id 전달
  // console.log(data); data 출력 테스트

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>; // 데이터 불러오기 전 헤더, 뷰어 섹션 렌더링 방지 예외 처리
  } else {
    <div>
      <div>{id}번 일기</div>
      <div>Diary 페이지 입니다.</div>
    </div>;
  }
};

export default Diary;
