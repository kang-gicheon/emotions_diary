import { emotionList } from '../util'; // 감정 이미지를 불러옴(데이터 형태)
import './Viewer.css';

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId); // emotionList에서 id가 emotionId 일치하는 데이터를 탐색, 저장
  console.log(emotionItem);

  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 감정</h4>
        <div
          className={[
            // 감정 이미지의 번호에 따라 다른 className 갖도록 지정
            'emotion_img_wrapper',
            `emotion_img_wrapper_${emotionId}`,
          ].join(' ')}
        >
          {/* 감정 이미지 렌더링, alt = 감정 이미지 이름, src = 감정 이미지의 주소 */}
          <img alt={emotionItem.name} src={emotionItem.img} />
          {/* 감정 이미지 이름 렌더링 */}
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          {/* 일기 내용(content) 렌더링 */}
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
