/**
 * URL 파라미터로 받은 id로
 * 일기 데이터 불러옴
 * 일치하는 데이터가 없으면 Home 페이지로 되돌려 보내는 기능
 */

import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  // 일기 데이터를 불러옴
  const data = useContext(DiaryStateContext); // useContext를 이용한 전체 일기 데이터 불러옴
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert('일기가 존재하지 않습니다');
      navigate('/', { replace: true }); // 일기가 없다면 잘못된 경로로 접근했으므로 대화상자 출력 후 Home으로 돌려보냄
      // 페이지를 이동한 후 다시 돌아올 수 없게 뒤로 가기 아이콘 비활성화
    }
  }, [id, data]);

  return diary;
};
export default useDiary;
