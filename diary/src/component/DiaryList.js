// 일기리스트 하단부 구현

import Button from "./Button";
import "./DiaryList.css";

// 일기 리스트 렌더링을 위한 부모인 home에서 필터링 된 일기를 props로
const DiaryList = ({ data }) => {
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select></select>
        </div>
        <div className="right_col">
          <Button type={"positive"} text={"새 일기 쓰기"} />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
