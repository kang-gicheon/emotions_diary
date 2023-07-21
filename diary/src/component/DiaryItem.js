// 작성된 일기 리스트, 아이템을 보여줄 컴포넌트

import './DiaryItem.css';

const DiaryItem = ({ id, emotionId, content, date }) => {
  return <div className="DiaryItem">{content}</div>;
};

export default DiaryItem;
