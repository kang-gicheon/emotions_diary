// 작성한 일기를 수정하거나 삭제하는 페이지 컴포넌트

import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import Header from '../component/Header';
import Button from '../component/Button';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import Editor from '../component/Editor';
import { setPageTitle } from '../util';

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  const { onUpdate, onDelete } = useContext(DiaryDispatchContext); // 함수 onDelete 구조 분해 할당
  // update 함수
  const onSubmit = (data) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    setPageTitle(`${id}번 일기 수정하기 `);
  });

  // 삭제하기 함수
  const onClickDelete = () => {
    // 삭제하기 버튼 onClick 이벤트 핸들러
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      // 반환값이 참이면 onDelete 호출
      onDelete(id); // 인수로 일기 id 전달, 현재 수정 중 일기 삭제
      navigate('/', { replace: true }); // 삭제 후 navigate 호출, Home으로 이동
    }
  };
  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title={'일기 수정하기'}
          leftChild={<Button text={'< 뒤로 가기'} onClick={goBack} />}
          rightChild={
            <Button
              type={'negative'}
              text={'삭제하기'}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
