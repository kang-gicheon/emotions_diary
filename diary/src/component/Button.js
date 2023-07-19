/**
 * 모든 페이지에서 공통으로 사용하는 버튼
 *
 * default : 일반적인 기능을 하는 버튼 회색 계열로 구현
 * positive : 새로운 일기 작성, 일기 작성 완료, 수정 완료등의 기능처리 버튼 - 녹색
 * negative : 일기를 삭제하는 등의 기능을 가진 버튼 - 빨간색
 */

import "./Button.css";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
