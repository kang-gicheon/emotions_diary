// 감정 이미지 선택과 관련 기능 구현을 위한 컴포넌트
/**
 * EmontionItem은 Editor 컴포넌트에서 props로 5개의 값을 받음
 *
 * id: 감정 이미지의 아이디
 * img: 감정 이미지의 이름
 * name: 감정 이미지의 이름
 * onClick: 감정 이미지를 클릭하면 동작하는 이벤트 핸들러
 * isSelected : 감정 이미지의 선택 여부 - 선택된 감정 이미지에 별도의 스타일을 적용
 */
import React from 'react';
import './EmotionItem.css';

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(' ')}
      onClick={handleOnClick}
    >
      <img alt={`emtion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
