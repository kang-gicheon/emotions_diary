// 새로운 일기 작성 페이지 컴포넌트

import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Button from '../component/Button';
import Editor from '../component/Editor';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext); // useContext를 호출해 DiaryDispatchContext에서 onCreate 호출
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate('/', { replace: true });
  };

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'} onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
