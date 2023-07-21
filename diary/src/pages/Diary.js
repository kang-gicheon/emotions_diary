// 일기 상세 조회 페이지 컴포넌트
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import { getFormattedDate } from '../util';
import Header from '../component/Header';
import Button from '../component/Button';
import Viewer from '../component/Viewer';

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); // 인수를 통해 URL파라미터로 받은 일기 id 전달
  // console.log(data); data 출력 테스트
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`); // 함수 navigate 호출, `/edit/${id}` <- 전달하는 인수, Edit 페이지로 이동
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>; // 데이터 불러오기 전 헤더, 뷰어 섹션 렌더링 방지 예외 처리
  } else {
    const { date, emotionId, content } = data; // 일기데이터 구조분해할당 , Id는 페이지에 렌더링X
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`; // 헤더 정중앙에 위치 형태 : yyyy-mm-dd

    return (
      <div>
        <Header // title에는 날짜 제목 문자열(yyyy-mm-dd)
          title={title}
          leftChild={<Button text={'< 뒤로 가기'} onClick={goBack} />}
          rightChild={<Button text={'수정하기'} onClick={goEdit} />}
        />
        <div>
          <div>{id}번 일기</div>
          <div>Diary 페이지 입니다.</div>
        </div>
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
